"use client";

import Link from "next/link";
import logo from "../../../public/icons/plastic-recycling.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-upper-row">
        <div className="wrapper">
          <div className="footer-logo-wrapper">
            <Link className="navigation-logo" href={"/"}>
              <Image src={logo} alt="Icon" className="navigation-logo" />
              PCR-Pack
            </Link>

            <p className="footer-label">
              Krzemowa 12, Nadolice Wielkie, Polska
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:pcr-pack@gmail.com" className="footer-link">
              pcr-pack@gmail.com
            </a>

            <a href="tel:+48530132121" className="footer-phone">
              +48 530132121
            </a>
          </div>
        </div>
      </div>
      <div className="footer-down-row">
        <div className="wrapper">
          <p className="footer-copyright">
            © PCR-PACK. 2025 All rights reserved.
          </p>

          <div className="footer-navbar">
            <Link href="/" className="footer-navbar-link">
              Homepage
            </Link>
            <Link href="/catalogue" className="footer-navbar-link">
              Catalogue
            </Link>
            <Link href="/contacts" className="footer-navbar-link">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
