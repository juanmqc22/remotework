import React from "react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-text mb-4">Modern Talent</h3>
            <p className="text-sm text-text-secondary">
              Connecting growing US companies with exceptional, English-fluent talent across Latin America.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#why-latam" className="hover:text-text transition">
                  Why LatAm
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-text transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-text transition">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text transition">
                  Assessment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-text transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text transition">
                  For Candidates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-text transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
            <p>
              &copy; {currentYear} Modern Talent Acquisition. All rights reserved.
            </p>
            <p>
              Crafted with care for companies that refuse to compromise on team quality.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
