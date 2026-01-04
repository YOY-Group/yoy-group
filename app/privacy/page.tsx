// app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How YOY.Group handles personal data: what we collect, why, and your rights.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          This page explains how YOY.Group handles personal data. We keep this
          surface deliberately minimal. If anything here is unclear, contact us
          and we will clarify.
        </p>
      </header>

      <div className="my-16 h-px bg-border" />

      <section className="space-y-10 text-sm leading-relaxed">
        {/* Status / Scope */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Scope
          </h2>
          <p>
            This policy covers the YOY.Group website and related contact
            interactions. Commerce activity for SKIN by YOY (storefront, checkout,
            payments, shipping) is handled on separate surfaces and may have its
            own privacy disclosures.
          </p>
        </div>

        {/* Controller */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Data controller
          </h2>
          <p>
            YOY.Group acts as the data controller for this site. If you need the
            legal entity details for a contract, compliance request, or data
            rights request, contact us and we will provide them.
          </p>
          <p className="text-muted-foreground">
            Contact:{" "}
            <a className="underline hover:text-foreground" href="mailto:privacy@yoy.group">
              privacy@yoy.group
            </a>
          </p>
        </div>

        {/* What we collect */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What we collect
          </h2>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium">Contact details</span> (e.g., name,
              email) if you send us a message.
            </li>
            <li>
              <span className="font-medium">Message content</span> you choose to
              provide (inquiries, proposals, notes).
            </li>
            <li>
              <span className="font-medium">Basic technical data</span> that may
              be logged by hosting and security providers (e.g., IP address,
              user-agent, timestamps) for reliability and abuse prevention.
            </li>
          </ul>

          <p className="text-muted-foreground">
            We do not intentionally collect special-category data (e.g., health,
            biometrics, political opinions). Please do not send it to us.
          </p>
        </div>

        {/* Why / lawful bases */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Why we process data
          </h2>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium">To respond to you</span> (lawful
              basis: legitimate interests or steps prior to a contract).
            </li>
            <li>
              <span className="font-medium">To operate and secure the site</span>{" "}
              (lawful basis: legitimate interests).
            </li>
            <li>
              <span className="font-medium">To meet legal obligations</span>{" "}
              where applicable (lawful basis: legal obligation).
            </li>
          </ul>
        </div>

        {/* Cookies / analytics */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Cookies and analytics
          </h2>
          <p>
            We aim to keep tracking minimal. If we introduce analytics or
            marketing cookies that require consent under UK/EU law, we will add a
            consent mechanism and update this policy.
          </p>
        </div>

        {/* Sharing / processors */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Sharing and processors
          </h2>
          <p>
            We may use service providers to host and protect this site and to
            handle email. These providers process data on our instructions and
            only as necessary to deliver their services.
          </p>
        </div>

        {/* International transfers */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            International transfers
          </h2>
          <p>
            Some service providers may process data outside the UK/EEA. Where
            applicable, we rely on appropriate safeguards (such as standard
            contractual clauses) or adequacy mechanisms.
          </p>
        </div>

        {/* Retention */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Retention
          </h2>
          <p>
            We keep personal data only as long as needed for the purposes above:
            inquiries are typically retained for operational continuity, and
            security logs are retained for limited periods. We delete or
            anonymize data when it is no longer required.
          </p>
        </div>

        {/* Your rights */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Your rights (UK/EU)
          </h2>
          <p>
            If you are in the UK or EU, you may have rights to access, correct,
            delete, restrict, object to processing, and receive a copy of your
            data (data portability). You may also withdraw consent where consent
            is the basis.
          </p>
          <p className="text-muted-foreground">
            To exercise rights, email{" "}
            <a className="underline hover:text-foreground" href="mailto:privacy@yoy.group">
              privacy@yoy.group
            </a>
            .
          </p>
        </div>

        {/* Complaints */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Complaints
          </h2>
          <p>
            You can contact us first and we will try to resolve concerns quickly.
            You may also have the right to complain to your local supervisory
            authority (in the UK: the ICO).
          </p>
        </div>

        {/* Updates */}
        <div className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Changes
          </h2>
          <p>
            We may update this policy as the system evolves. Material changes
            will be reflected on this page.
          </p>
          <p className="text-xs text-muted-foreground">Last updated: 21 Dec 2025</p>
        </div>
      </section>
    </main>
  );
}