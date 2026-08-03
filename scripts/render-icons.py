"""Rasterize the Avante People mark to app/favicon.ico and app/apple-icon.png.

    python3 scripts/render-icons.py app

Those two are binaries, so they cannot share a source with the SVG the site
actually renders. This script is the link: the geometry below mirrors
app/icon.svg and components/ui/Logo.tsx on the same 24-unit grid, and rerunning
it is how the raster icons follow a change to the mark. Shapes are drawn from
signed distance fields with analytic coverage antialiasing — stdlib only, so it
runs anywhere without an image library.
"""

import math
import struct
import zlib

TILE = (0x1B, 0x2E, 0xE5)  # --color-ultra
MARK = (0xFF, 0xFF, 0xFF)
RADIUS = 7.2  # rx on the 24-unit grid — 30%, matching the header chip
STROKE = 3.0
SEGMENTS = [((4.0, 20.0), (12.0, 4.4)), ((12.0, 4.4), (20.0, 20.0)), ((6.36, 15.4), (17.64, 15.4))]


def sd_round_rect(px, py, half, r):
    qx, qy = abs(px) - (half - r), abs(py) - (half - r)
    outside = math.hypot(max(qx, 0.0), max(qy, 0.0))
    return outside + min(max(qx, qy), 0.0) - r


def sd_segment(px, py, a, b):
    ax, ay = a
    bx, by = b
    vx, vy = bx - ax, by - ay
    wx, wy = px - ax, py - ay
    t = max(0.0, min(1.0, (wx * vx + wy * vy) / (vx * vx + vy * vy)))
    return math.hypot(wx - t * vx, wy - t * vy)


def coverage(d, scale):
    """Distance in grid units -> pixel coverage."""
    return min(max(0.5 - d * scale, 0.0), 1.0)


def render(size):
    """RGBA rows for a size x size icon."""
    scale = size / 24.0
    rows = []
    for y in range(size):
        row = bytearray()
        gy = (y + 0.5) / scale
        for x in range(size):
            gx = (x + 0.5) / scale
            tile = coverage(sd_round_rect(gx - 12.0, gy - 12.0, 12.0, RADIUS), scale)
            mark = coverage(min(sd_segment(gx, gy, a, b) for a, b in SEGMENTS) - STROKE / 2.0, scale)
            mark *= tile  # never let the glyph spill past the rounded corners
            alpha = tile
            if alpha <= 0.0:
                row += b"\x00\x00\x00\x00"
                continue
            # Mark over tile, then the pair over transparency (premultiply-safe
            # because both layers are opaque where they cover).
            px = [
                round((MARK[i] * mark + TILE[i] * (1.0 - mark)))
                for i in range(3)
            ]
            row += bytes(px) + bytes([round(alpha * 255)])
        rows.append(bytes(row))
    return rows


def png(rows, size):
    raw = b"".join(b"\x00" + r for r in rows)

    def chunk(tag, data):
        body = tag + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body))

    return (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )


def ico(entries):
    """entries: [(size, png_bytes)] -> .ico with PNG-compressed images."""
    header = struct.pack("<HHH", 0, 1, len(entries))
    offset = len(header) + 16 * len(entries)
    directory, blobs = b"", b""
    for size, blob in entries:
        directory += struct.pack(
            "<BBBBHHII", size % 256, size % 256, 0, 0, 1, 32, len(blob), offset
        )
        offset += len(blob)
        blobs += blob
    return header + directory + blobs


if __name__ == "__main__":
    import sys

    out = sys.argv[1]
    with open(f"{out}/apple-icon.png", "wb") as f:
        f.write(png(render(180), 180))
    with open(f"{out}/favicon.ico", "wb") as f:
        f.write(ico([(s, png(render(s), s)) for s in (16, 32, 48)]))
    print("wrote apple-icon.png (180) and favicon.ico (16/32/48)")
