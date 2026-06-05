"use client";

import { useModal } from "../modal/ModalContext";

export default function About() {
  const { open } = useModal();
  return (
    <section id="about" className="section">
      <img src="/assets/img/about-decor-1.svg" alt="" className="decor about-decor-1" />
      <img src="/assets/img/about-decor-7.svg" alt="" className="decor about-decor-7" />
      <img src="/assets/img/about-decor-6.svg" alt="" className="decor about-decor-6" />
      <div className="container">
        <h2 className="section-title --center">Über die Gründerin</h2>
        <div
          className="about-block"
          onClick={() => open("about")}
          role="button"
          tabIndex={0}
        >
          <img src="/assets/img/about-decor-3.svg" alt="" className="decor about-decor-3" />
          <img src="/assets/img/about-decor-4.svg" alt="" className="decor about-decor-4" />
          <div className="about-block__text-wrap" data-aos="slide-in-left">
            <div className="about-block__text">
              <img
                src="/assets/img/about-decor-2.svg"
                alt=""
                className="decor about-decor-2"
              />
              Mein Name ist Kateryna, ich komme aus der Ukraine. Ich habe zwei
              Hochschulabschlüsse und bringe langjährige Erfahrung in der Arbeit
              mit Kindern mit.
              <br />
              Nach meinem Umzug nach Deutschland habe ich diese Schule
              gegründet...
            </div>
          </div>
          <div className="about-block__img" data-aos="fade-up">
            <img
              src="/assets/img/about-decor-5.svg"
              alt=""
              className="decor about-decor-5"
            />
            <img src="/assets/uploads/about.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
