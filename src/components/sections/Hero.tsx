"use client";

import RawSvg from "../RawSvg";
import { heroSvg } from "../svg";
import { useModal } from "../modal/ModalContext";

export default function Hero() {
  const { open } = useModal();
  return (
    <section id="main" className="section">
      <div className="container">
        <div className="main-hero" data-aos="slide-in-left">
          <img
            src="/assets/img/main-hero-decor-1.svg"
            alt=""
            className="main-hero__decor1 decor"
          />
          <img
            src="/assets/img/main-hero-decor-2.svg"
            alt=""
            className="main-hero__decor2 decor"
          />
          <div className="main-hero__inner">
            <div className="main-hero__left">
              <RawSvg svg={heroSvg} />
            </div>
            <div className="main-hero__right">
              <h1>Willkommen!</h1>
              <div className="main-hero__text">
                Ihre Nachhilfeschule, in der Lernen einfach und interessant
                wird.
                <br />
                Wir sind hier, um Ihrem Kind zu helfen, in der Schule
                erfolgreich zu sein!
                <br />
                <br />
                Unser Ziel ist es, Wissen zugänglich, verständlich und
                interessant zu machen.
              </div>
              <div className="main-hero__button">
                <a
                  href="#"
                  className="button open-form"
                  onClick={(e) => {
                    e.preventDefault();
                    open("form");
                  }}
                >
                  {"  "}Probestunde
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
