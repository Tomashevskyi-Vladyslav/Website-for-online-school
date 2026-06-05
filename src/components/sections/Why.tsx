"use client";

import { useModal } from "../modal/ModalContext";

export default function Why() {
  const { open } = useModal();
  return (
    <section id="why" className="section">
      <img src="/assets/img/why-decor-1.svg" alt="" className="why-decor-1 decor" />
      <img src="/assets/img/why-decor-3.svg" alt="" className="why-decor-3 decor" />
      <div className="container">
        <img src="/assets/img/why-decor-2.svg" alt="" className="why-decor-2 decor" />
        <div className="section-title">Warum Kati Profi-Nachhilfe?</div>

        <div className="why-block">
          <div className="why-block__left">
            <img src="/assets/uploads/why.png" alt="" />
          </div>
          <div className="why-block__right">
            <h3 className="why-block__title">
              Die Schule Kati Profi-Nachhilfe wurde speziell für Kinder
              gegründet.
            </h3>
            <div className="why-block__text">
              Die Aufgaben in Form von Spielen zielen darauf ab, die
              Aufmerksamkeit des Kindes zu fesseln und ihm das Lernmaterial
              detailliert zu vermitteln. Außerdem fördern wir das kreative
              Potenzial der Kinder in monatlichen Meisterkursen in unserer
              Schule. Es gibt Einzel- und Gruppenunterricht.
            </div>
            <div className="why-block__button">
              <a
                href="#"
                className="button --green open-gallery"
                onClick={(e) => {
                  e.preventDefault();
                  open("gallery");
                }}
              >
                Sehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
