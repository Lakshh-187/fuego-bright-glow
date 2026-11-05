import logo from "@/assets/fuego-logo-v2.asset.json";
import { MapPin, Mail, Phone, Globe, Warehouse } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/90 mt-24" style={{ backgroundColor: "oklch(0.18 0.02 40)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="Fuego" className="h-12 w-auto" />
            <span className="font-display text-xl font-bold">Fuego Gas Generator</span>
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
          <h4 className="text-white font-semibold mb-4">Talk to us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><Globe className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="https://www.fuegogas.com" className="hover:text-primary">www.fuegogas.com</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="mailto:contact@fuegogas.com" className="hover:text-primary">contact@fuegogas.com</a></li>
            <li>
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span><span className="block text-white font-medium">Sales & WhatsApp</span></span></div>
              <ul className="mt-1 space-y-1 pl-6">
                <li><span className="text-primary">Lagos:</span> <a href="tel:+2347036232511" className="hover:text-primary">+234 703 6232 511</a></li>
                <li><span className="text-primary">Abuja:</span> <a href="tel:+2347064931017" className="hover:text-primary">+234 706 4931 017</a></li>
                <li><span className="text-primary">Rivers PH:</span> <a href="tel:+2347060824881" className="hover:text-primary">+234 706 082 4881</a></li>
                <li><span className="text-primary">Delta Asaba:</span> <a href="tel:+2348153695432" className="hover:text-primary">+234 815 369 5432</a></li>
              </ul>
            </li>
            <li>
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span><span className="block text-white font-medium">Managing Director — Capt Bora</span></span></div>
              <ul className="mt-1 space-y-1 pl-6">
                <li><span className="text-primary">Head Office:</span> <a href="tel:+919910923879" className="hover:text-primary">+91 99109 23879</a></li>
                <li><a href="tel:+2348082500793" className="hover:text-primary">+234 808 2500 793</a></li>
              </ul>
            </li>
            <li><a href="https://wa.me/2348091756468" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90">WhatsApp Sales Help Desk</a></li>
          </ul>
          <h4 className="text-white font-semibold mt-8 mb-4">Find us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span><span className="block text-white">Head office, Lagos</span>22 Town Planning Way, Ilupeju</span></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span><span className="block text-white">Abuja branch</span>No. 17 Usan Street, Gaduwa</span></li>
            <li className="flex gap-2"><Warehouse className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <span><span className="block text-white">Warehouses</span>Matori & Isolo Industrial Areas, Lagos</span></li>
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
