import RawSvg from "../RawSvg";
import { mapPinASvg, mapPinBSvg } from "../svg";

const MAP_A =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.7095426753235!2d6.777106880070145!3d49.30634661255243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795a8c1af26fdb5%3A0x503558962426b5c9!2zUHJvdmluemlhbHN0cmHDn2UgMTM4LCA2NjgwNiBFbnNkb3JmLCDQndGW0LzQtdGH0YfQuNC90LA!5e0!3m2!1sde!2sua!4v1757282703468!5m2!1sde!2sua";

const MAP_B =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.6561051317933!2d6.975493703754005!3d49.23256962027045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b3fe9845ce67%3A0xbf815517e306e079!2sReuterstra%C3%9Fe%201%2C%2066117%20Saarbr%C3%BCcken%2C%20Deutschland!5e0!3m2!1sde!2sua!4v1774376936189!5m2!1sde!2sua";

export default function MapSection() {
  return (
    <section id="map" className="section">
      <div className="container">
        <h2 className="section-title --center">Wir befinden uns hier</h2>
        <div className="map-grid">
          <div className="map-item">
            <div className="map-subtitle">
              <RawSvg svg={mapPinASvg} />
              <span>Provinzialstraße 138, 66806 Ensdorf</span>
            </div>
            <div className="map-holder">
              <iframe
                src={MAP_A}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="map-item">
            <div className="map-subtitle">
              <RawSvg svg={mapPinBSvg} />
              <span>Reuterstraße 1, 66117 Saarbrücken</span>
            </div>
            <div className="map-holder">
              <iframe
                src={MAP_B}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
