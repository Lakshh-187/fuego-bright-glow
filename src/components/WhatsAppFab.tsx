import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const phone = "2349041412211"; // Sales Head Arpit
  const text = encodeURIComponent(
    "Hello Fuego Gas Generator — I'd like to know more about your gas generator solutions."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fuego Sales on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl ring-4 ring-[#25D366]/20 transition hover:scale-105 hover:shadow-[#25D366]/40"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M19.11 17.18c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.72 1.43 5.34L5 27l5.78-1.52a10.65 10.65 0 0 0 5.24 1.34h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.56a10.62 10.62 0 0 0-7.57-3.24zm0 19.54a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.43.9.92-3.34-.21-.34a8.82 8.82 0 0 1-1.36-4.71c0-4.9 3.99-8.88 8.9-8.88 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.99 8.9-8.89 8.9z" />
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">Chat with Sales</span>
    </a>
  );
}
