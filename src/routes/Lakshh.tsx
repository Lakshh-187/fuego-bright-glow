import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Server,
  Network,
  Cpu,
  Lock,
  ClipboardCheck,
  ArrowLeft,
  Mail,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";

import lakshayProfile from "@/assets/lakshay-profile.jpg.asset.json";

export const Route = createFileRoute("/Lakshh")({
  head: () => ({
    meta: [
      { title: "Auditor — Tech Advisor & Auditor | Fuego Gas Generator" },
      {
        name: "description",
        content:
          "Lakshay Choudhary (Inderjeet) — Technology Advisor & Auditor helping design resilient IT infrastructure, security frameworks, and digital systems for Fuego Gas Generator.",
      },
      {
        property: "og:title",
        content: "Auditor — Tech Advisor & Auditor | Fuego Gas Generator",
      },
      {
        property: "og:description",
        content:
          "Helping design tech infrastructure, security, and audit-ready digital systems for Fuego Gas Generator.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LakshhPage,
});

const expertise = [
  {
    icon: Server,
    title: "Infrastructure Architecture",
    description:
      "Designs scalable, fault-tolerant server and cloud environments that keep critical business systems online.",
  },
  {
    icon: Network,
    title: "Network & Systems Design",
    description:
      "Plans secure network topologies, VPNs, and system integrations for distributed teams and field operations.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Builds security frameworks, access controls, and audit-ready policies that protect company and customer data.",
  },
  {
    icon: Cpu,
    title: "Digital Operations",
    description:
      "Advises on ERP, CRM, and workflow automation to reduce manual overhead and improve decision-making speed.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Audits",
    description:
      "Reviews existing systems, identifies risks, and delivers actionable remediation roadmaps.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Governance",
    description:
      "Establishes governance models that align technology decisions with business continuity and growth goals.",
  },
];

const auditHighlights = [
  "End-to-end IT infrastructure review",
  "Security posture & vulnerability assessment",
  "Cloud & on-premise systems alignment",
  "Data backup, recovery, and business continuity planning",
  "Compliance readiness for industry standards",
  "Technology roadmap & vendor evaluation",
];

function LakshhPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Fuego Gas Generator
          </Link>
          <span className="font-display text-sm font-semibold text-foreground">
            Fuego Gas Generator
          </span>
        </div>
      </div>

      {/* Hero / Profile */}
      <section className="relative overflow-hidden bg-ember px-4 pb-16 pt-12 md:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Tech Advisor & Auditor
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl lg:text-6xl">
              Auditor
            </h1>
            <p className="mt-2 font-display text-xl font-semibold text-primary md:text-2xl">
              Lakshay Choudhary (Inderjeet)
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Helping design resilient technology infrastructure, security
              frameworks, and audit-ready digital systems for Fuego Gas
              Generator. Bridging engineering operations with modern, secure IT
              architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:contact@fuegogas.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-flame transition-transform hover:scale-[1.02] hover:bg-primary/95"
              >
                <Mail className="h-4 w-4" />
                Contact via Fuego
              </a>
              <a
                href="https://maps.app.goo.gl/qHjiVyffqEUjXFai8?g_st=awb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-input bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <MapPin className="h-4 w-4 text-primary" />
                Abuja, Nigeria
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-foreground">
                  6+
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Advisory Domains
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-foreground">
                  End-to-end
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Infrastructure Design
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-foreground">
                  Audit
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ready Systems
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-primary-glow/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-flame">
                <img
                  src={lakshayProfile.url}
                  alt="Lakshay Choudhary — Tech Advisor & Auditor at Fuego Gas Generator"
                  className="h-[28rem] w-full max-w-sm object-cover md:h-[32rem] md:max-w-md"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-border bg-card p-4 shadow-soft md:-right-8">
                <Building2 className="h-6 w-6 text-primary" />
                <p className="mt-1 text-xs font-semibold text-foreground">
                  Fuego Gas Generator
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Tech Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration factory */}
      <section className="px-4 pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <img
              src="/assets/fuego-chinese-factory.png"
              alt="Fuego — Chinese collaboration factory visit with KONTEC and Weifang Kangte Gas Generator teams"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Advisory Scope
            </h2>
            <p className="mt-3 text-muted-foreground">
              Practical technology guidance that supports operations, security,
              and growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-flame"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit focus */}
      <section className="bg-ember px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:items-center md:p-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Audit & Assessment Focus
              </h2>
              <p className="mt-4 text-muted-foreground">
                A structured review process that uncovers gaps, prioritizes
                risks, and produces a clear remediation plan for leadership.
              </p>
              <ul className="mt-8 space-y-4">
                {auditHighlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative rounded-2xl bg-flame p-8 text-primary-foreground">
                <ClipboardCheck className="h-10 w-10" />
                <p className="mt-4 font-display text-2xl font-bold">
                  "Technology should be invisible, secure, and always ready."
                </p>
                <p className="mt-4 text-sm opacity-90">
                  — Auditor, Tech Advisor & Auditor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <footer className="border-t border-border bg-card px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              Fuego Gas Generator
            </p>
            <p className="text-sm text-muted-foreground">
              Clean power. Smarter operations. Reliable infrastructure.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fuego Gas Generator. Tech Advisor page —
            not linked from public navigation.
          </p>
        </div>
      </footer>
    </div>
  );
}
