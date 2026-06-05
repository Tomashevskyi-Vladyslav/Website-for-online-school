"use client";

import { useModal } from "./ModalContext";
import { useContactForm } from "../useContactForm";
import GalleryLightbox from "./GalleryLightbox";
import { ofertaHtml, policyHtml, impressumHtml } from "@/data/legal";

const WHITE_X =
  "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.83753 6.8375C7.01331 6.66194 7.25159 6.56332 7.50003 6.56332C7.74847 6.56332 7.98675 6.66194 8.16253 6.8375L23.1625 21.8375C23.2546 21.9233 23.3285 22.0268 23.3798 22.1418C23.431 22.2568 23.4585 22.381 23.4608 22.5068C23.463 22.6327 23.4398 22.7578 23.3927 22.8745C23.3455 22.9912 23.2754 23.0973 23.1863 23.1863C23.0973 23.2753 22.9913 23.3455 22.8745 23.3927C22.7578 23.4398 22.6328 23.463 22.5069 23.4607C22.381 23.4585 22.2569 23.431 22.1419 23.3797C22.0269 23.3285 21.9234 23.2546 21.8375 23.1625L6.83753 8.1625C6.66197 7.98672 6.56335 7.74844 6.56335 7.5C6.56335 7.25156 6.66197 7.01328 6.83753 6.8375Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.1626 6.8375C23.3381 7.01328 23.4367 7.25156 23.4367 7.5C23.4367 7.74844 23.3381 7.98672 23.1626 8.1625L8.16255 23.1625C7.98483 23.3281 7.74978 23.4183 7.5069 23.414C7.26402 23.4097 7.03229 23.3113 6.86052 23.1395C6.68876 22.9678 6.59037 22.736 6.58608 22.4932C6.5818 22.2503 6.67195 22.0152 6.83755 21.8375L21.8376 6.8375C22.0133 6.66194 22.2516 6.56332 22.5001 6.56332C22.7485 6.56332 22.9868 6.66194 23.1626 6.8375Z' fill='white'/%3E%3C/svg%3E\")";

function FormPopupBody() {
  const f = useContactForm();
  return (
    <form className="form-popup__form ajax-form" onSubmit={f.handleSubmit}>
      <div className="input-wrap">
        <input type="text" className="input-text" name="name" placeholder="Name" required />
      </div>
      <div className="input-wrap">
        <input type="email" className="input-text" name="email" placeholder="email@gmail.com" required />
      </div>
      <div className="input-wrap">
        <input
          type="tel"
          className={`input-text phone-input${f.phoneInvalid ? " invalid" : ""}`}
          name="phone"
          placeholder="Telefon"
          value={f.phone}
          onChange={(e) => f.onPhoneChange(e.target.value)}
          required
        />
      </div>
      <div className="input-wrap --submit --center">
        <button className="button --white" type="submit" disabled={f.submitting}>
          Anmelden
        </button>
      </div>
      <div className="form-error" style={{ display: f.showError ? "block" : "none" }}>
        <div className="form-error__item">
          Falsches Telefonformat. Bitte geben Sie eine gültige Telefonnummer ein.
        </div>
      </div>
    </form>
  );
}

export default function Modals() {
  const { active, close } = useModal();
  if (!active) return null;

  const overlay = (content: React.ReactNode) => (
    <div className="fb-overlay" onMouseDown={close}>
      <div className="fb-content" onMouseDown={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );

  if (active === "form") {
    return overlay(
      <div id="form-popup" className="form-popup">
        <div className="form-popup__inner">
          <img src="/assets/img/popup-decor.svg" className="decor decor-popup" alt="" />
          <div className="form-popup__title">Anmeldung für eine Probestunde!</div>
          <FormPopupBody />
        </div>
        <button className="fancybox-close-small" aria-label="Schließen" onClick={close} />
      </div>
    );
  }

  if (active === "thx") {
    return overlay(
      <div id="thx-popup" className="form-popup">
        <div className="form-popup__inner">
          <img src="/assets/img/popup-decor.svg" className="decor decor-popup" alt="" />
          <div className="form-popup__title">Vielen Dank für Ihre Anfrage!</div>
          <div className="form-popup__text">
            Wir haben Ihre Daten erhalten und melden uns in Kürze bei Ihnen.
          </div>
        </div>
        <button className="fancybox-close-small" aria-label="Schließen" onClick={close} />
      </div>
    );
  }

  if (active === "gallery") {
    return overlay(
      <div id="gallery-popup">
        <GalleryLightbox />
        <button
          className="fancybox-close-small"
          aria-label="Schließen"
          onClick={close}
          style={{ backgroundImage: WHITE_X, top: -42, right: 0 }}
        />
      </div>
    );
  }

  if (active === "about") {
    return overlay(
      <div id="about-popup">
        <div className="about-popup__inner">
          <div className="about-popup__title">Über die Gründerin</div>
          <div className="about-popup__content">
            <div className="about-popup__text">
              Mein Name ist Kateryna, ich komme aus der Ukraine. Ich habe zwei
              Hochschulabschlüsse und bringe langjährige Erfahrung in der Arbeit
              mit Kindern mit.
              <br />
              Nach meinem Umzug nach Deutschland habe ich diese Schule gegründet,
              weil ich gesehen habe, wie herausfordernd es für Kinder
              unterschiedlicher Nationalitäten sein kann, sich an ein neues
              Bildungssystem anzupassen.
              <br />
              Unsere Schule unterstützt Kinder dabei, Deutsch, Mathematik und
              andere Fächer in einer freundlichen, druckfreien Umgebung zu lernen
              – ohne Angst vor Fehlern.
              <br />
              Wir unterrichten nicht nur – wir begleiten, erklären, fördern und
              inspirieren.
              <br />
              Zudem bieten wir regelmäßig kreative Workshops an, damit Lernen
              nicht nur nützlich, sondern auch spannend und abwechslungsreich
              ist.
              <br />
              Mein Ziel ist es, dass sich jedes Kind bei uns sicher fühlt und
              sich in seinem eigenen Tempo entwickeln kann.
            </div>
            <div className="about-popup__image">
              <img src="/assets/img/about.png" alt="" />
            </div>
          </div>
        </div>
        <button className="fancybox-close-small" aria-label="Schließen" onClick={close} />
      </div>
    );
  }

  // Legal text popups
  const legal: Record<string, { title: string; html: string }> = {
    oferta: { title: "Angebotsvertrag", html: ofertaHtml },
    policy: { title: "Datenschutzerklärung", html: policyHtml },
    impressum: { title: "Impressum", html: impressumHtml },
  };
  const item = legal[active];
  return overlay(
    <div className="text-popup">
      <div className="about-popup__inner">
        <div className="about-popup__title">{item.title}</div>
        <div className="about-popup__content">
          <div
            className="about-popup__text"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </div>
      </div>
      <button className="fancybox-close-small" aria-label="Schließen" onClick={close} />
    </div>
  );
}
