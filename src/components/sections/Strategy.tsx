"use client";

import { useContactForm } from "../useContactForm";

export default function Strategy() {
  const f = useContactForm();
  return (
    <section id="strategy" className="section">
      <div className="container">
        <img src="/assets/img/strategy-decor-1.svg" alt="" className="decor strategy-decor-1" />
        <img src="/assets/img/strategy-decor-2.svg" alt="" className="decor strategy-decor-2" />
        <img src="/assets/img/strategy-decor-3.svg" alt="" className="decor strategy-decor-3" />
        <img src="/assets/img/strategy-decor-4.svg" alt="" className="decor strategy-decor-4" />
        <h2 className="section-title --center">
          Eine Zukunftsstrategie für Ihr Kind
        </h2>
        <div className="strategy-text">
          Die erste Probestunde kann jetzt gebucht werden! Machen Sie diesen
          Schritt in Richtung Entwicklung und Inspiration für Ihr Kind.
        </div>

        <div className="strategy-form">
          <form className="strategy-form__form ajax-form" onSubmit={f.handleSubmit}>
            <div className="contact-form__inner">
              <div className="contact-form__col input-wrap">
                <div className="input-wrap__title">Telefon</div>
                <input
                  type="tel"
                  name="phone"
                  className={`input-text phone-input${f.phoneInvalid ? " invalid" : ""}`}
                  placeholder="Telefon"
                  value={f.phone}
                  onChange={(e) => f.onPhoneChange(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form__col input-wrap">
                <div className="input-wrap__title">Name</div>
                <input
                  type="text"
                  name="name"
                  className="input-text"
                  placeholder="Name der Eltern"
                  required
                />
              </div>
              <div className="contact-form__col input-wrap">
                <div className="input-wrap__title">Email</div>
                <input
                  type="email"
                  name="email"
                  className="input-text"
                  placeholder="email@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="form-error" style={{ display: f.showError ? "block" : "none" }}>
              <div className="form-error__item">
                Falsches Telefonformat. Bitte geben Sie eine gültige
                Telefonnummer ein.
              </div>
            </div>
            <div className="form-agree">
              Durch Klicken auf die Schaltfläche „Für eine kostenlose
              Probestunde anmelden“ stimmen Sie der Datenschutzerklärung zu und
              nehmen das öffentliche Angebot an.
            </div>
            <div className="form-button">
              <button className="button --white" type="submit" disabled={f.submitting}>
                Anmelden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
