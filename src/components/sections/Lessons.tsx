"use client";

import { useModal } from "../modal/ModalContext";

const LESSONS = [
  {
    title: "Einzelunterricht",
    items: [
      "Format: online / in der Schule",
      "Die Unterrichtsstunden dauern 60/90 Minuten.",
      "2 Mal pro Woche",
      "Nachmittags- & Wochenendunterricht.",
      "Für alle mit Wunsch nach schnellen Fortschritten & individuellem Ansatz.",
      "Preis: ab 30 €",
    ],
  },
  {
    title: "Gruppen",
    items: [
      "Format: online / in der Schule",
      "Die Unterrichtsstunden dauern 60/90 Minuten.",
      "2 Mal pro Woche",
      "In Gruppe mit 3–6 Schülern gleichen Niveaus",
      "Ideal für die Motivation im Team und zu einem erschwinglichen Preis",
      "Preis: ab 20 €",
    ],
  },
  {
    title: "SozU",
    items: [
      "Format: online / in der Schule",
      "Die Dauer hängt vom Programm ab.",
      "Zeitplan: nach Vereinbarung",
      "In Gruppe mit 3–6 Schülern gleichen Niveaus",
      "Für Kinder von Eltern beim Jobcenter / Agentur für Arbeit",
      "Bezahlung über Sozialhilfe",
    ],
  },
];

export default function Lessons() {
  const { open } = useModal();
  return (
    <section id="lessons" className="section">
      <div className="container">
        <img src="/assets/img/lessons-decor-1.svg" alt="" className="decor lessons-decor-1" />
        <img src="/assets/img/lessons-decor-2.svg" alt="" className="decor lessons-decor-2" />
        <img src="/assets/img/lessons-decor-3.svg" alt="" className="decor lessons-decor-3" />
        <img src="/assets/img/lessons-decor-4.svg" alt="" className="decor lessons-decor-4" />
        <h2 className="section-title --center" data-aos="slide-in-right">
          Unterricht
        </h2>
        <div className="lessons-types">
          {LESSONS.map((l) => (
            <div
              className="lessons-types__item lesson-item"
              data-aos="fade-up"
              key={l.title}
            >
              <div className="lesson-item__title">{l.title}</div>
              <div className="lesson-item__body">
                <div className="lesson-item__list">
                  {l.items.map((it, i) => (
                    <div className="lesson-item__list-item" key={i}>
                      {it}
                    </div>
                  ))}
                </div>
                <div className="lesson-item__button">
                  <a
                    href="#"
                    className="button --green open-form"
                    onClick={(e) => {
                      e.preventDefault();
                      open("form");
                    }}
                  >
                    Anmelden
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
