"use client";

import { useState } from "react";
import { useModal } from "./modal/ModalContext";

// Mirrors the original site's phone validation: a plausible international /
// local phone number. The original used a mask lib with autoValidate that
// flagged the field `.valid`; here we validate on submit.
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d]/g, "");
  if (digits.length < 7 || digits.length > 15) return false;
  return /^\+?[0-9\s()/-]+$/.test(value.trim());
}

export function useContactForm() {
  const { open, close } = useModal();
  const [phone, setPhone] = useState("");
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onPhoneChange = (v: string) => {
    setPhone(v);
    if (phoneInvalid && isValidPhone(v)) {
      setPhoneInvalid(false);
      setShowError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setPhoneInvalid(true);
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitting(true);
    // No WordPress backend in this rebuild — emulate the async success flow.
    setTimeout(() => {
      const form = e.target as HTMLFormElement;
      form.reset();
      setPhone("");
      setSubmitting(false);
      close();
      setTimeout(() => open("thx"), 120);
    }, 500);
  };

  return {
    phone,
    phoneInvalid,
    showError,
    submitting,
    onPhoneChange,
    handleSubmit,
  };
}
