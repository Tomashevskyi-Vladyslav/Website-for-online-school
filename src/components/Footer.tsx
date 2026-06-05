"use client";

import RawSvg from "./RawSvg";
import { iconInstagramSvg, iconTelegramSvg } from "./svg";
import { useModal } from "./modal/ModalContext";
import { smoothScrollTo } from "./Header";

export default function Footer() {
  const { open } = useModal();
  const nav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="footer">
      <img src="/assets/img/footer-decor-1.svg" alt="" className="decor footer-decor-1" />
      <img src="/assets/img/footer-decor-2.svg" alt="" className="decor footer-decor-2" />
      <img src="/assets/img/footer-decor-3.svg" alt="" className="decor footer-decor-3" />
      <div className="footer-inner">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top__left">
              <div className="footer-menu">
                <div className="footer-menu__title">Katalog</div>
                <div className="footer-menu__list">
                  <a className="smoothscroll" href="#directions" onClick={(e) => nav(e, "#directions")}>Kurs</a>
                  <a className="smoothscroll" href="#lessons" onClick={(e) => nav(e, "#lessons")}>Preis</a>
                  <a className="smoothscroll" href="#about" onClick={(e) => nav(e, "#about")}>Über uns</a>
                </div>
              </div>
              <div className="footer-menu">
                <div className="footer-menu__title">Über uns</div>
                <div className="footer-menu__list">
                  <a className="smoothscroll" href="#faq" onClick={(e) => nav(e, "#faq")}>FAQ</a>
                  <a className="smoothscroll" href="#testimonials" onClick={(e) => nav(e, "#testimonials")}>Feedback</a>
                </div>
              </div>
            </div>

            <div className="footer-top__right">
              <div className="footer-menu__title">Telefonnummer:</div>
              <div className="footer-tel">
                <div className="footer-tel__title">Deutsch/Ukrainisch</div>
                <a href="tel:+4917661207520" dir="ltr" className="footer-tel__link">
                  +49 176 61207520{" "}
                </a>
              </div>
              <div className="footer-tel">
                <div className="footer-tel__title">Deutsch/Arabisch </div>
                <a href="tel:+4917670573430" dir="ltr" className="footer-tel__link">
                  +49 176 70573430{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <a href="#" className="footer-bottom__logo" onClick={(e) => e.preventDefault()}>
              <img src="/assets/img/logo.svg" alt="" />
            </a>
            <div className="footer-bottom__menu">
              <a href="#" onClick={(e) => { e.preventDefault(); open("oferta"); }}>Angebotsvertrag</a>
              <a href="#" onClick={(e) => { e.preventDefault(); open("policy"); }}>Datenschutzerklärung</a>
              <a href="#" onClick={(e) => { e.preventDefault(); open("impressum"); }}>Impressum</a>
            </div>
            <div className="footer-bottom__socials">
              <a href="#inst" target="_blank" rel="nofollow" className="footer-bottom__social">
                <RawSvg svg={iconInstagramSvg} />
              </a>
              <a href="#tg" className="footer-bottom__social">
                <RawSvg svg={iconTelegramSvg} />
              </a>
            </div>
            <div className="footer-copyright" dir="ltr">
              © Kati Profi-Nachhilfe imited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
