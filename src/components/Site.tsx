"use client";

import { useEffect } from "react";
import AOS from "aos";

import { ModalProvider } from "./modal/ModalContext";
import Modals from "./modal/Modals";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./sections/Hero";
import Directions from "./sections/Directions";
import Why from "./sections/Why";
import About from "./sections/About";
import Lessons from "./sections/Lessons";
import DecorSection from "./sections/DecorSection";
import Strategy from "./sections/Strategy";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import MapSection from "./sections/MapSection";

export default function Site() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
    });
    // Original toggles <html class="loaded"> ~1s after load.
    const t = setTimeout(() => {
      document.documentElement.classList.add("loaded");
      AOS.refresh();
    }, 1000);

    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--app-const-height",
        `${window.innerHeight}px`
      );
    };
    setAppHeight();
    window.addEventListener("resize", setAppHeight);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", setAppHeight);
    };
  }, []);

  return (
    <ModalProvider>
      <Header />
      <Hero />
      <Directions />
      <Why />
      <About />
      <Lessons />
      <DecorSection />
      <Strategy />
      <Testimonials />
      <Faq />
      <MapSection />
      <Footer />
      <Modals />
    </ModalProvider>
  );
}
