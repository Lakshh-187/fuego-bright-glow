import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/fuego-logo-v2.asset.json";
import { Building2, MapPin, FileText, Users, Award, Briefcase, Target, Eye, Sparkles, ShieldCheck, Leaf, Lightbulb, HeartHandshake, Mountain } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fuego — Grade One Service Pvt Ltd | Nigeria Gas Energy" },
      { name: "description", content: "Fuego is a Grade One Service Pvt Ltd brand. Registered 2013 in Lagos (RC 1130970). Cummins gas generators, propane storage and gas supply across Nigeria." },
      { property: "og:title", content: "About Fuego Gas Generator" },
      { property: "og:description", content: "Legal info, mission, vision, values and company background." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ember border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">About Fuego</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight">
              A decade powering Nigeria with <span className="text-flame">cleaner energy</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Fuego is the gas energy brand of <strong>Grade One Service Pvt Ltd (G1S)</strong> — a Nigerian company registered on 24 July 2013 in Lagos, delivering Cummins-powered gas generators, propane storage tanks and end-to-end gas supply across the country.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-flame shadow-flame flex items-center justify-center p-12">
              <img src={logo.url} alt="Fuego logo" className="w-full max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Legal & corporate */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Legal & corporate</span>
          <h2 className="mt-3 text-4xl font-bold">Company registration</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Building2, k: "Legal name", v: "Grade One Service Pvt Ltd" },
            { icon: FileText, k: "Registration No.", v: "RC 1130970" },
            { icon: Briefcase, k: "Registered on", v: "24 July 2013, Lagos, Nigeria" },
            { icon: Award, k: "Auditors", v: "UHY MAAJI & CO, Lagos" },
            { icon: Users, k: "Memberships", v: "Lagos Chamber of Commerce & Industries (LCCI); Abuja Chamber of Commerce & Industries (ACCI)" },
            { icon: MapPin, k: "Registered office", v: "No 17, Usan Street, Total Cooperative Society, Gaduwa, Abuja, Nigeria" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</div>
              <div className="mt-1 font-semibold leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-ember border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-card border border-border p-10 shadow-soft">
            <Target className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-lg italic text-muted-foreground">
              "Empowering Nigeria with reliable, eco-friendly & economical energy solutions."
            </p>
          </div>
          <div className="rounded-2xl bg-flame text-primary-foreground p-10 shadow-flame">
            <Eye className="h-10 w-10" />
            <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-lg italic opacity-95">
              "To be a leading supplier of Oil & Gas with cutting-edge energy efficient generators in Nigeria."
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we stand for</span>
          <h2 className="mt-3 text-4xl font-bold">Our values</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, t: "Integrity", d: "We do what we promise — transparently." },
            { icon: Lightbulb, t: "Innovation", d: "Cutting-edge gas engine technology, locally deployed." },
            { icon: Sparkles, t: "Excellence", d: "Engineering and service standards held high." },
            { icon: Leaf, t: "Sustainability", d: "Cleaner-burning fuels for a cleaner Nigeria." },
            { icon: HeartHandshake, t: "Customer focus", d: "One vendor, full responsibility. Always." },
            { icon: Mountain, t: "Collaboration", d: "Partners, technicians and clients, aligned." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-flame text-primary-foreground shadow-flame">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-xl font-bold">{t}</h4>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products summary */}
      <section className="bg-ember border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Capabilities</span>
            <h2 className="mt-3 text-4xl font-bold">Products & services</h2>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "AGO supply for generators",
              "CNG & Propane gas generators",
              "Propane gas storage tanks",
              "CNG cascade & propane gas supply",
              "Periodic maintenance contracts",
              "Annual Maintenance Contracts (AMC)",
            ].map((p) => (
              <li key={p} className="rounded-xl bg-card border border-border px-5 py-4 font-medium">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            <strong className="text-foreground">Distribution network:</strong> Across Nigeria.
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-soft grid lg:grid-cols-2">
          <div className="p-10 md:p-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Visit us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Registered office, Abuja</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              No 17, Usan Street, Total Cooperative Society, Gaduwa, Abuja, Nigeria.
            </p>
            <a
              href="https://maps.app.goo.gl/qHjiVyffqEUjXFai8?g_st=awb"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame text-primary-foreground px-7 py-3.5 font-semibold shadow-flame hover:opacity-95 transition"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
          <div className="min-h-[320px] bg-ember">
            <iframe
              title="Fuego office location"
              src="https://maps.google.com/maps?q=No%2017%20Usan%20Street%20Total%20Cooperative%20Society%20Gaduwa%20Abuja&output=embed"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
