import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY, SERVICES, waLink } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "nam-inquiries";

type Props = {
  defaultService?: string;
  className?: string;
};

export function QuoteForm({ defaultService = "", className }: Props) {
  const { t, lang } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim() || digits.length < 8 || !message.trim()) {
      setError(t.contactPage.error);
      return;
    }
    setError("");
    setSending(true);
    const inquiry = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      message: message.trim(),
      lang,
      at: new Date().toISOString(),
    };
    window.setTimeout(() => {
      try {
        const existing = JSON.parse(
          window.localStorage.getItem(STORAGE_KEY) ?? "[]",
        ) as unknown[];
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify([inquiry, ...existing].slice(0, 40)),
        );
      } catch {
        /* demo storage is best-effort */
      }
      setSending(false);
      setDone(true);
    }, 500);
  }

  if (done) {
    const waText = [
      t.wa,
      name && `${lang === "ar" ? "الاسم" : "Name"}: ${name}`,
      phone && `${lang === "ar" ? "الهاتف" : "Phone"}: ${phone}`,
      service && `${lang === "ar" ? "الخدمة" : "Service"}: ${service}`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-elevated p-6 md:p-8",
          className,
        )}
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
          {t.contactPage.kicker}
        </p>
        <h3 className="mt-3 font-display text-3xl text-fg">
          {t.contactPage.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {t.contactPage.successBody}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={waLink(waText)} target="_blank" rel="noreferrer">
              {t.contactPage.whatsapp}
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl border border-border bg-elevated p-5 md:p-8",
        className,
      )}
      noValidate
    >
      <p className="font-display text-2xl text-fg">{t.contactPage.formTitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {t.contactPage.formBody}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={t.contactPage.name} htmlFor="q-name">
          <Input
            id="q-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Field>
        <Field label={t.contactPage.phoneField} htmlFor="q-phone">
          <Input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Field>
        <Field label={t.contactPage.emailField} htmlFor="q-email">
          <Input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label={t.contactPage.serviceField} htmlFor="q-service">
          <select
            id="q-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg outline-none transition-[border-color] duration-150 focus-visible:border-stone"
          >
            <option value="">{t.contactPage.servicePlaceholder}</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title[lang]}>
                {s.title[lang]}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label={t.contactPage.message} htmlFor="q-message">
            <Textarea
              id="q-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contactPage.messagePlaceholder}
              required
            />
          </Field>
        </div>
      </div>
      {error ? (
        <p className="mt-3 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" className="mt-6" disabled={sending}>
        {sending ? t.contactPage.sending : t.contactPage.submit}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
