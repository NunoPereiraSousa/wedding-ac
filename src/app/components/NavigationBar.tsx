import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/icons/plastic-recycling.png";
import Image from "next/image";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="navigation">
        <div className="navigation-wrapper">
          <Link className="navigation-logo" href={"/"}>
            <Image src={logo} alt="Icon" className="navigation-logo" />
            PCR-Pack
          </Link>

          <div className="navigation-links">
            <Link
              href="/"
              className={`navigation-link ${pathname === "/" ? "active" : ""}`}
            >
              {pathname === "/" && (
                <div className="navigation-link-circle"></div>
              )}
              Strona Główna
            </Link>
            <Link
              href="/catalogue"
              className={`navigation-link ${
                pathname === "/catalogue" ? "active" : ""
              }`}
            >
              {pathname === "/catalogue" && (
                <div className="navigation-link-circle"></div>
              )}
              Katalog
            </Link>
            <Link
              href="/contacts"
              className={`navigation-link ${
                pathname === "/contacts" ? "active" : ""
              }`}
            >
              {pathname === "/contacts" && (
                <div className="navigation-link-circle"></div>
              )}
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
