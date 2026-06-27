import { Link } from "@tanstack/react-router";
import logo from "@/assets/fuego-logo-v2.asset.json";
import { Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5">
          <img src={logo.url} alt="Fuego" className="h-14 w-auto drop-shadow-sm" />
          <span className="font-display text-xl font-bold tracking-tight leading-none">
            Fuego<span className="text-primary"> Gas Generator</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>Home</Link>
          <a href="/#products" className="hover:text-primary transition">Products</a>
          <a href="/#solutions" className="hover:text-primary transition">Solutions</a>
          <a href="/#savings" className="hover:text-primary transition">Savings</a>
          <Link to="/about" className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>About</Link>
        </nav>
        <a
          href="tel:+234"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-flame text-primary-foreground px-5 py-2 text-sm font-semibold shadow-flame hover:opacity-95 transition"
        >
          <Phone className="h-4 w-4" /> Contact
        </a>
      </div>
    </header>
  );
}
