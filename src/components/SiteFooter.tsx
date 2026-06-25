import logo from "@/assets/fuego-logo.asset.json";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/90 mt-24" style={{ backgroundColor: "oklch(0.18 0.02 40)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="Fuego" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold">Fuego Gas</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Empowering Nigeria with reliable, eco-friendly & economical energy solutions — CNG, LPG and turnkey gas generator systems.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Cummins Gas Generators</li>
            <li>LPG Storage Tanks</li>
            <li>CNG Cascade Supply</li>
            <li>Propane Gas Supply</li>
            <li>AGO Supply</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-primary">About Fuego</Link></li>
            <li>Mission & Vision</li>
            <li>Service & Maintenance</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Reach us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> No 17, Usan Street, Total Cooperative Society, Gaduwa, Abuja, Nigeria</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> info@fuegogas.ng</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +234 (0) 800 FUEGO</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <p>© {new Date().getFullYear()} Fuego Gas Generator. A Grade One Service Pvt Ltd company. RC 1130970.</p>
          <p>Distribution Network: Across Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
