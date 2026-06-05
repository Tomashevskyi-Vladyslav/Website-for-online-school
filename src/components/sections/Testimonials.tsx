"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RawSvg from "../RawSvg";
import { testiArrowASvg, testiArrowBSvg } from "../svg";

const REVIEWS = [
  {
    img: "/assets/uploads/matvij.jpg",
    name: "Mutter von Matvij",
    text: (
      <>
        Wir sind mit unserem Unterricht an der Schule sehr zufrieden! Der
        Deutschunterricht ist äußerst interessant und lebendig, stets in einer
        freundlichen und herzlichen Atmosphäre. Meinem Sohn Matviy gefällt es
        sehr gut – er besucht den Unterricht mit großer Begeisterung und freut
        sich jedes Mal darauf.
        <br />
        Ein besonderer Dank gilt unserer Lehrerin Kateryna, die perfekt auf die
        Kinder eingeht und den Unterricht lebendig und spannend gestaltet. Dank
        ihrer Professionalität und ihrer Liebe zu ihrer Arbeit erzielen wir
        hervorragende Lernerfolge.
        <br />
        Wir empfehlen die Schule allen Eltern, die eine qualitativ hochwertige,
        interessante und effektive Ausbildung für ihre Kinder suchen, wärmstens!
      </>
    ),
  },
  {
    img: "/assets/uploads/david.jpg",
    name: "Eltern von David",
    text: (
      <>
        Wir sind mit dem Unterricht an der KatiProfi_Nachhilfe-Schule in Ensdorf
        (Saarland) sehr zufrieden. Die Lehrerin Katja ist äußerst talentiert und
        engagiert. Unser Kind genießt den Unterricht sehr: Sie läuft mit großer
        Freude zum Unterricht und kommt immer gut gelaunt zurück. Schon nach den
        ersten Unterrichtsstunden konnten wir deutliche Ergebnisse und deutliche
        Fortschritte feststellen. Vielen Dank für Ihre Professionalität und
        Liebe zur Arbeit!
      </>
    ),
  },
  {
    img: "/assets/uploads/anna.jpg",
    name: "Eltern von Anna",
    text: (
      <>
        Wir sind der Schule „Kati Ptofi-Nachhilfe“ aufrichtig dankbar, dass sie
        unserem Kind (12 Jahre alt) beim Deutschlernen geholfen hat. Dies ist
        eine wunderbare Möglichkeit, die Zugänglichkeit und hohe Bildungsqualität
        vereint. Unser besonderer Dank gilt der Lehrerin Kateryna, die unserem
        Kind mit Liebe und Professionalität hilft, Deutsch zu lernen. Dank ihrer
        Unterstützung sehen wir spürbare Fortschritte: Das Kind kommuniziert
        selbstbewusster und entdeckt selbst neues Wissen. Vielen Dank für Ihre
        Arbeit, die herzliche Atmosphäre und Ihren aufrichtigen Wunsch zu
        unterrichten!
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <img
          src="/assets/img/testimonials-decor-1.svg"
          alt=""
          className="decor testimonials-decor-1"
        />
        <h2 className="section-title --center">Was Eltern über uns sagen</h2>
        <div className="testimonials-swiper swiper-container">
          <div className="swiper-button-prev">
            <RawSvg svg={testiArrowASvg} />
          </div>
          <div className="swiper-button-next">
            <RawSvg svg={testiArrowBSvg} />
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={15}
            loop
            navigation={{
              nextEl: ".testimonials-swiper .swiper-button-next",
              prevEl: ".testimonials-swiper .swiper-button-prev",
            }}
          >
            {REVIEWS.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="testimonials-card">
                  <div className="testimonials-card__inner">
                    <div className="testimonials-card__img">
                      <img src={r.img} alt="" />
                    </div>
                    <div className="testimonials-card__body">
                      <div className="testimonials-card__name">{r.name}</div>
                      <div className="testimonials-card__text">{r.text}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
