"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RawSvg from "../RawSvg";
import { dirPrevSvg, dirNextSvg } from "../svg";

const CARDS = [
  {
    title: "Lesen",
    text: "Buchstaben lernen, lesen und Sätze bilden.",
    img: "/assets/uploads/1OBJECTS.svg",
  },
  {
    title: "Deutsch",
    text: "Grammatik lernen und Wortschatz erweitern.",
    img: "/assets/uploads/Capa_1.svg",
  },
  {
    title: "Mathematik",
    text: "Formeln, Aufgaben und Theoreme – wir erklären alles in einfacher Sprache.",
    img: "/assets/uploads/2OBJECTS.svg",
  },
  {
    title: "Wortschatz",
    text: "Erweitere deinen Wortschatz täglich mit neuen Wörtern und Redewendungen.",
    img: "/assets/uploads/Character.svg",
  },
  {
    title: "Audio + Aussprache",
    text: "Singen und zuhören, um deine Aussprache zu trainieren.",
    img: "/assets/uploads/Group-2.svg",
  },
  {
    title: "Leichte Grammatik",
    text: "Wir erklären schwierige Grammatikthemen mit einfachen Worten und Beispielen.",
    img: "/assets/uploads/OBJECTS.svg",
  },
];

export default function Directions() {
  return (
    <section id="directions" className="section">
      <img
        className="directions-decor-2 decor"
        src="/assets/img/directions-decor-2.svg"
        alt=""
      />
      <img
        className="directions-decor-3 decor"
        src="/assets/img/directions-decor-3.svg"
        alt=""
      />
      <div className="container">
        <img
          className="directions-decor-1 decor"
          src="/assets/img/directions-decor-1.svg"
          alt=""
        />

        <h2 className="section-title --center">Unsere Schwerpunkte</h2>

        <div className="directions-swiper swiper-container">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={32}
            loop
            navigation={{
              nextEl: ".directions-swiper .swiper-button-next",
              prevEl: ".directions-swiper .swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              668: { slidesPerView: 1 },
              868: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {CARDS.map((c) => (
              <SwiperSlide key={c.title}>
                <div className="directions-card">
                  <div className="directions-card__inner">
                    <div className="directions-card__title">{c.title}</div>
                    <div className="directions-card__text">{c.text}</div>
                    <div className="directions-card__image">
                      <img src={c.img} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev">
            <RawSvg svg={dirPrevSvg} />
          </div>
          <div className="swiper-button-next">
            <RawSvg svg={dirNextSvg} />
          </div>
        </div>
      </div>
    </section>
  );
}
