"use client";

import { useState } from "react";

import { ContactForm } from "@/components/landing/ContactForm";

export function ContactCard() {
  const [formKey, setFormKey] = useState(0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <ContactForm key={formKey} onRequestNew={() => setFormKey((value) => value + 1)} />
    </div>
  );
}
