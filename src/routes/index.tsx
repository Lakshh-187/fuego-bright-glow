import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-generator.jpg";
import tankImg from "@/assets/propane-tank.jpg";
import truckImg from "@/assets/gas-truck.jpg";
import serviceImg from "@/assets/service-team.jpg";
import {
  Flame, Zap, Fuel, Wrench, ShieldCheck, Leaf, Truck, Factory,
  CheckCircle2, ArrowRight, Gauge, Cpu, ChevronRight, TrendingDown
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fuego Gas Generator — Cummins LPG, CNG & Propane Power Solutions Nigeria" },
      { name: "description", content: "Fuego delivers turnkey gas generator solutions — Cummins LPG/CNG gensets, propane storage tanks and fuel supply. Cut energy costs up to 55% vs diesel." },
      { property: "og:title", content: "Fuego Gas Generator — Cleaner, cheaper power for Nigeria" },
      { property: "og:description", content: "Cummins gas gensets, LPG storage and CNG cascade supply. One vendor, full responsibility." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Stats />
      <Products />
      <Solution />
      <Savings />
      <Maintenance />
      <Cta />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
          <Flame className="h-3.5 w-3.5 text-primary-glow" /> Powering Nigeria, cleanly
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl font-bold leading-[1.05]">
          Reliable gas power.<br />
          <span className="text-flame">Real fuel savings.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
          Fuego delivers Cummins LPG & CNG generators, propane storage tanks and end-to-end gas supply — a single turnkey partner for hotels, industries and residences.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-semibold shadow-flame hover:opacity-95 transition">
            Explore generators <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#savings" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/20 transition">
            See cost savings
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "55%", v: "Fuel savings with CNG vs diesel" },
    { k: "200 kVA", v: "Flagship Cummins LPG genset" },
    { k: "1,200 hrs", v: "Standard warranty coverage" },
    { k: "10+ yrs", v: "Serving Nigerian energy needs" },
  ];
  return (
    <section className="border-y border-border bg-ember">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.k}>
            <div className="text-4xl font-display font-bold text-flame">{i.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const products = [
    { icon: Zap, title: "Cummins Gas Generators", desc: "15 kVA to 500 kVA HTG series LPG/CNG gensets built on the Cummins G-Drive 3.9L–38L engine platform.", tag: "15–500 kVA" },
    { icon: Fuel, title: "Propane Storage Tanks", desc: "Vertical and horizontal LPG storage solutions with minimal footprint and integrated piping.", tag: "Custom sizing" },
    { icon: Truck, title: "CNG & Propane Supply", desc: "CNG cascade and propane gas delivery across Nigeria with our own logistics fleet.", tag: "Nationwide" },
    { icon: Wrench, title: "Maintenance & AMC", desc: "Periodic service and annual maintenance contracts handled by BE Electrical & Mechanical engineers.", tag: "Same-day service" },
  ];
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">What we deliver</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Products & services under one roof</h2>
        <p className="mt-4 text-muted-foreground">Generators, storage, fuel supply and lifetime service — Fuego is your single accountable energy partner.</p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {products.map(({ icon: Icon, title, desc, tag }) => (
          <div key={title} className="group rounded-2xl border border-border bg-card p-8 hover:shadow-flame hover:-translate-y-1 transition-all">
            <div className="flex items-start justify-between">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-flame text-primary-foreground shadow-flame">
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-semibold text-primary bg-accent rounded-full px-3 py-1">{tag}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Learn more <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Cummins HTG table */}
      <div className="mt-16 rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <div className="p-6 md:p-8 border-b border-border bg-ember">
          <div className="flex items-center gap-3">
            <Cpu className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Cummins HTG Series — Technical specs</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Based on the Cummins G-Drive engine, with IMPCO USA air-fuel mixer and Madas pressure regulator.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Model</th>
                <th className="px-4 py-3 font-semibold">Prime kW</th>
                <th className="px-4 py-3 font-semibold">Prime kVA</th>
                <th className="px-4 py-3 font-semibold">Standby kW</th>
                <th className="px-4 py-3 font-semibold">Standby kVA</th>
                <th className="px-4 py-3 font-semibold">Engine</th>
                <th className="px-4 py-3 font-semibold">Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["HTG-50GF", "50", "62.5", "55", "68.4", "HT6B5.9-G", "2200×900×1400"],
                ["HTG-100GF", "100", "125", "110", "137.5", "HT6CT8.3-G", "2450×1100×1650"],
                ["HTG-150GF", "150", "200", "165", "220", "HT6LTAA8.9-G", "2450×1100×1650"],
                ["HTG-200GF", "200", "250", "220", "275", "HTNTA855-G", "3200×1000×1930"],
                ["HTG-300GF", "300", "375", "330", "412", "HTKTA19-G", "3850×1530×2270"],
                ["HTG-500GF", "500", "625", "550", "687", "HTKTA38-G", "4300×1620×2370"],
              ].map((r) => (
                <tr key={r[0]} className="hover:bg-accent/40">
                  {r.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-semibold text-primary" : ""}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const features = [
    "Quiet operation, lower running cost than diesel",
    "Single vertical LPG storage tank — minimal footprint",
    "Integrated LPG piping to generator & kitchen",
    "Pressure regulators, safety valves & leak detection",
    "Turn-key design, installation & commissioning",
    "One vendor, full responsibility",
  ];
  return (
    <section id="solutions" className="bg-ember">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src={tankImg} alt="LPG propane storage tank" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-soft" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Proposed solution</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for hotels, industries & residences</h2>
          <p className="mt-4 text-muted-foreground">
            A 200 kVA Cummins LPG generator paired with a single vertical LPG storage tank — feeding both the generator and the kitchen through one integrated, safety-monitored system.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Savings() {
  const rows = [
    { label: "Generator", diesel: "200 kVA", lpg: "200 kVA", cng: "200 kVA" },
    { label: "Fuel cost / unit", diesel: "₦1,100", lpg: "₦700", cng: "₦500" },
    { label: "Running hrs/day", diesel: "16", lpg: "16", cng: "16" },
    { label: "Cost per hour", diesel: "₦49,500", lpg: "₦31,500", cng: "₦22,500" },
    { label: "Cost per day", diesel: "₦792,000", lpg: "₦504,000", cng: "₦360,000" },
    { label: "1-year running cost", diesel: "₦289.08m", lpg: "₦183.96m", cng: "₦131.40m" },
    { label: "3-year running cost", diesel: "₦867.24m", lpg: "₦551.88m", cng: "₦394.20m" },
  ];
  return (
    <section id="savings" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cost comparison</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Diesel vs LPG vs CNG</h2>
        <p className="mt-4 text-muted-foreground">Real numbers for a 200 kVA generator running 16 hours a day. Choosing gas is one of the most direct ways to cut your energy bill.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { tag: "Diesel", note: "Baseline", v: "₦867.24m", sub: "3-year running cost", tone: "border-border bg-card" },
          { tag: "LPG", note: "~36% savings", v: "₦551.88m", sub: "Switch and save", tone: "border-primary/30 bg-accent" },
          { tag: "CNG", note: "~55% savings", v: "₦394.20m", sub: "Highest long-term savings", tone: "bg-flame text-primary-foreground border-transparent shadow-flame" },
        ].map((c) => (
          <div key={c.tag} className={`rounded-2xl border p-6 ${c.tone}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold opacity-80">{c.tag}</span>
              <TrendingDown className="h-5 w-5 opacity-80" />
            </div>
            <div className="mt-3 text-3xl font-display font-bold">{c.v}</div>
            <div className="mt-1 text-sm opacity-90">{c.sub}</div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-wider opacity-80">{c.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="text-left">
                <th className="px-5 py-3 font-semibold">Specification</th>
                <th className="px-5 py-3 font-semibold text-destructive">Diesel</th>
                <th className="px-5 py-3 font-semibold text-primary">LPG</th>
                <th className="px-5 py-3 font-semibold" style={{ color: "oklch(0.55 0.16 230)" }}>CNG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-5 py-3 font-medium">{r.label}</td>
                  <td className="px-5 py-3">{r.diesel}</td>
                  <td className="px-5 py-3">{r.lpg}</td>
                  <td className="px-5 py-3">{r.cng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Maintenance() {
  const items = [
    { p: "Engine oil", c: "Daily / Weekly", i: "Every 300–750 hrs", n: "Use OEM-recommended oil" },
    { p: "Oil filter", c: "At service", i: "Every 500–750 hrs", n: "Replace with oil change" },
    { p: "Air filter", c: "Weekly", i: "Every 1,000 hrs", n: "Clean regularly" },
    { p: "Gas filter", c: "At service", i: "Every 1,000 hrs", n: "Critical for gas quality" },
    { p: "Spark plugs", c: "At service", i: "Every 1,000–1,500 hrs", n: "Gas engines use spark plugs" },
    { p: "Coolant", c: "Weekly", i: "Every 1,500–2,000 hrs", n: "Check level & quality" },
    { p: "Battery", c: "Weekly", i: "Every 2–3 years", n: "Depends on usage" },
  ];
  return (
    <section className="bg-ember">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <img src={serviceImg} alt="Fuego service engineer" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-soft" />
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "1-year warranty", s: "or 1,200 hrs" },
              { icon: Gauge, t: "Same-day response", s: "service engineers" },
              { icon: Wrench, t: "Genuine spares", s: "immediate replacement" },
              { icon: Factory, t: "Factory backup", s: "online + on-site" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="rounded-xl bg-card border border-border p-4">
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-2 font-semibold text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Service & spares</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Routine maintenance, done right</h2>
          <p className="mt-4 text-muted-foreground">Our centralised monitoring keeps every routine check on schedule. BE Electrical & Mechanical engineers and certified diploma technicians on the ground across Nigeria.</p>
          <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Part / Item</th>
                  <th className="px-4 py-3 font-semibold">Check</th>
                  <th className="px-4 py-3 font-semibold">Replacement</th>
                  <th className="px-4 py-3 font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((r) => (
                  <tr key={r.p}>
                    <td className="px-4 py-3 font-medium">{r.p}</td>
                    <td className="px-4 py-3">{r.c}</td>
                    <td className="px-4 py-3 text-primary font-medium">{r.i}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-flame text-primary-foreground p-12 md:p-16 shadow-flame">
        <div className="absolute -right-20 -bottom-20 opacity-20">
          <img src={truckImg} alt="" className="h-80 w-auto" loading="lazy" />
        </div>
        <div className="relative max-w-2xl">
          <Leaf className="h-10 w-10 mb-4 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold">Switch to cleaner, cheaper power.</h2>
          <p className="mt-4 text-lg opacity-95">Talk to our engineers about a turnkey LPG or CNG generator solution sized to your facility — installed and commissioned by Fuego.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+234" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3.5 font-semibold hover:bg-white/90 transition">
              Request a quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://maps.app.goo.gl/qHjiVyffqEUjXFai8?g_st=awb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10 transition">
              Visit our office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
