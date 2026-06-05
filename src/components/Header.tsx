"use client";

import { useEffect, useRef, useState } from "react";
import RawSvg from "./RawSvg";
import { toggleXSvg, toggleBarsSvg } from "./svg";

const NAV = [
  { href: "#directions", label: "Kurs" },
  { href: "#lessons", label: "Preis" },
  { href: "#about", label: "Über uns" },
  { href: "#testimonials", label: "Feedback" },
  { href: "#faq", label: "FAQ" },
];

function smoothScrollTo(href: string) {
  const el = document.querySelector(href) as HTMLElement | null;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, []);

  const onNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScrollTo(href);
  };

  const langDropdown = (
    <div className="header-lang">
      <div className="language-dropdown" ref={langRef}>
        <div
          className={`dropdown-trigger${langOpen ? " active" : ""}`}
          onClick={() => setLangOpen((v) => !v)}
        >
          <span className="current-language">de</span>
        </div>
        <div
          className="dropdown-menu"
          style={{ display: langOpen ? "block" : "none" }}
        >
          <a href="/ua/" className="dropdown-item">ua</a>
          <a href="/ar/" className="dropdown-item">ar</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={menuOpen ? "is-active" : undefined}>
        <div className="header__inner">
          <div className="header-box">
            <div className="header__logo">
              <img src="/assets/img/logo.svg" alt="Logo" />
            </div>
            <div className="header-right">
              <div className="header__menu">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    className="smoothscroll"
                    href={n.href}
                    onClick={(e) => onNavClick(e, n.href)}
                  >
                    {n.label}
                  </a>
                ))}
              </div>
              <div
                className={`header__toggle header-toggle${menuOpen ? " is-active" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <div className="toggle is-openned">
                  <RawSvg svg={toggleXSvg} />
                </div>
                <div className="toggle is-closed">
                  <RawSvg svg={toggleBarsSvg} />
                </div>
              </div>
            </div>
          </div>
          {langDropdown}
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " is-active" : ""}`}>
        <div className="mobile-menu__inner">
          {NAV.map((n) => (
            <a
              key={n.href}
              className="smoothscroll"
              href={n.href}
              onClick={(e) => onNavClick(e, n.href)}
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export { smoothScrollTo };
