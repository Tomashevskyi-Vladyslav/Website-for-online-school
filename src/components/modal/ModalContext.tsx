"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ModalId =
  | "form"
  | "thx"
  | "gallery"
  | "about"
  | "oferta"
  | "policy"
  | "impressum"
  | null;

type Ctx = {
  active: ModalId;
  open: (id: Exclude<ModalId, null>) => void;
  close: () => void;
};

const ModalCtx = createContext<Ctx | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ModalId>(null);

  const open = (id: Exclude<ModalId, null>) => setActive(id);
  const close = () => setActive(null);

  // Lock body scroll while a modal is open (matches Fancybox behaviour)
  useEffect(() => {
    const cls = "fb-lock";
    if (active) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [active]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ModalCtx.Provider value={{ active, open, close }}>
      {children}
    </ModalCtx.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalCtx);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
