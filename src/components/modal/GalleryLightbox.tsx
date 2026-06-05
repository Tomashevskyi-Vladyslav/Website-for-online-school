"use client";

import { useState } from "react";

const IMAGES = [
  "/assets/uploads/g1.jpeg",
  "/assets/uploads/g2.jpeg",
  "/assets/uploads/g3.jpeg",
  "/assets/uploads/g4.jpeg",
  "/assets/uploads/g5.jpeg",
  "/assets/uploads/g6.jpeg",
  "/assets/uploads/g7.jpeg",
  "/assets/uploads/g8.jpeg",
];

const ARROW =
  "url(\"data:image/svg+xml,%3Csvg width='81' height='81' viewBox='0 0 81 81' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40.0624' cy='40.0622' r='40' transform='rotate(-179.911 40.0624 40.0622)' fill='%23FAF6F1'/%3E%3Cpath d='M55.3502 39.6166L24.0068 40.2887M55.3502 39.6166L42.1894 52.593M55.3502 39.6166L41.6452 27.2163' stroke='%23263238' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";

export default function GalleryLightbox() {
  const [idx, setIdx] = useState(0);
  const go = (d: number) => setIdx((i) => (i + d + IMAGES.length) % IMAGES.length);

  return (
    <div className="gallery-lb">
      <div className="gallery-lb__stage">
        <button
          className="gallery-lb__arr gallery-lb__arr--prev"
          aria-label="Zurück"
          style={{ backgroundImage: ARROW, transform: "translateY(-50%) rotate(180deg)" }}
          onClick={() => go(-1)}
        />
        <img src={IMAGES[idx]} alt="" />
        <button
          className="gallery-lb__arr gallery-lb__arr--next"
          aria-label="Weiter"
          style={{ backgroundImage: ARROW }}
          onClick={() => go(1)}
        />
      </div>
      <div className="gallery-lb__thumbs">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className={`gallery-lb__thumb${i === idx ? " is-active" : ""}`}
            onClick={() => setIdx(i)}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
