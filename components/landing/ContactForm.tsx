"use client";

import { useActionState } from "react";

import { useTranslations } from "next-intl";

import { submitContact } from "@/actions/submitContact";
import type { ContactFormState } from "@/lib/leads/submitLead";

const initialState: ContactFormState = { ok: false };

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p className="mt-1 text-sm text-red-600" role="alert">
      {messages[0]}
    </p>
  );
}

type ContactFormProps = {
  onRequestNew?: () => void;
};

export function ContactForm({ onRequestNew }: ContactFormProps) {
  const t = useTranslations("contactForm");
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-950">
        <p className="text-lg font-semibold">{t("successTitle")}</p>
        <p className="mt-2 text-sm leading-relaxed">{state.message}</p>
        <button
          type="button"
          onClick={() => onRequestNew?.()}
          className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          {t("another")}
        </button>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    <form action={formAction} className="grid gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-600/40 transition focus:border-cyan-500 focus:ring-2"
          />
          <FieldError messages={errors.name} />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            {t("phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-600/40 transition focus:border-cyan-500 focus:ring-2"
          />
          <FieldError messages={errors.phone} />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-600/40 transition focus:border-cyan-500 focus:ring-2"
          />
          <FieldError messages={errors.email} />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-slate-700"
          >
            {t("city")}
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-600/40 transition focus:border-cyan-500 focus:ring-2"
          />
          <FieldError messages={errors.city} />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-600/40 transition focus:border-cyan-500 focus:ring-2"
          />
          <FieldError messages={errors.message} />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 size-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-600"
        />
        <label
          htmlFor="consent"
          className="text-sm leading-relaxed text-slate-600"
        >
          {t("consent")}
        </label>
      </div>
      <FieldError messages={errors.consent} />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? t("submitting") : t("submit")}
        </button>
        {state.message && !state.ok ? (
          <p className="text-sm text-red-600" role="alert">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
