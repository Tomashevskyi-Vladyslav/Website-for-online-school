"use client";

import { useState } from "react";

const FAQ = [
  {
    q: "Gibt es eine kostenlose Probestunde?",
    a: "Ja, wir bieten eine kostenlose Probestunde an, damit Sie den Lehrer kennenlernen, die Methodik beurteilen und sich davon überzeugen können, dass das Format genau zu Ihnen passt.",
  },
  {
    q: "Wie laufen die Kurse ab?",
    a: "Der Unterricht findet einzeln oder in kleinen Gruppen statt. Wir verwenden moderne Lehrbücher, interaktive Aufgaben und praktische Übungen. Für Kinder wechseln wir zwischen Lernblöcken, Spielen, kreativen Projekten und Teamarbeit, um ihr Interesse und ihre Motivation aufrechtzuerhalten.",
  },
  {
    q: "Kann man Nachhilfe über das Jobcenter bekommen?",
    a: "Wenn ein Kind zusätzliche Unterstützung beim Lernen benötigt, kann das Jobcenter die Kosten für den Unterricht im Rahmen eines staatlichen Förderprogramms vollständig übernehmen. Wir helfen Eltern bei der Beantragung aller erforderlichen Unterlagen und begleiten den Prozess von der Antragstellung bis zum Beginn des Unterrichts.",
  },
  {
    q: "Für welches Alter sind Ihre Kurse geeignet?",
    a: "Wir unterrichten Kinder ab 6 Jahren bis zum Schulabschluss.",
  },
  {
    q: "Was sind Ihre außerschulischen Aktivitäten?",
    a: "Jeden Monat veranstalten wir kreative Workshops, die Kindern helfen, ihre Fantasie, Kreativität und ihr Selbstvertrauen zu entwickeln. Die Workshops finden in einer interessanten und zugänglichen Form statt, was den Lernprozess spannend und effektiv macht.",
  },
  {
    q: "Ist es möglich, online zu lernen?",
    a: "Ja, Sie können das für Sie passende Format wählen – entweder den Unterricht in der Schule besuchen oder online über Zoom, Google Meet oder andere Plattformen daran teilnehmen.",
  },
  {
    q: "Gibt es Sonderangebote oder Aktionen?",
    a: "Ja, natürlich! Wir haben eine Aktion „Bring einen Freund mit und erhalte einen kostenlosen Meisterkurs“. Für jeden mitgebrachten Freund erhalten Sie einen kreativen Meisterkurs. Je mehr Freunde, desto mehr kostenlose Kurse. Sie können sich während des Probekurses über die Aktion beraten lassen.",
  },
  {
    q: "Wie informieren Sie die Eltern über die Fortschritte ihres Kindes?",
    a: "Wir haben ein praktisches elektronisches Studentenportal, wo Sie sehen können, was Ihr Kind im Unterricht gemacht hat, seinen Lernfortschritt, die erledigten Aufgaben sowie den Stundenplan und Informationen zur Bezahlung.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title --center">Fragen und Antworten</h2>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div
              className={`faq-list__item faq-item${openIdx === i ? " --active" : ""}`}
              key={i}
            >
              <div
                className="faq-item__title"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {item.q}
              </div>
              <div className="faq-item__body">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
