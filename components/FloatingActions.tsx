function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
      <path d="M20 11.9a7.9 7.9 0 0 1-11.95 6.75L4 20l1.43-4.22A7.9 7.9 0 1 1 20 11.9Z" />
      <path d="M9.4 8.95c.16-.35.34-.36.5-.36h.4c.13 0 .32-.05.5.38.16.42.56 1.45.61 1.55.06.1.1.22.02.36-.08.15-.12.24-.23.37-.12.12-.24.26-.34.35-.12.12-.25.25-.11.48.14.23.64 1.05 1.37 1.7.94.84 1.73 1.1 1.98 1.22.25.12.39.1.53-.06.13-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.23.12.38.18.43.28.05.1.05.6-.11 1.18-.16.57-.95 1.09-1.44 1.14-.39.04-.87.07-1.48-.1-.37-.12-.85-.28-1.47-.55-2.3-1-3.81-3.26-3.93-3.42-.12-.16-.93-1.24-.93-2.37 0-1.12.6-1.66.81-1.89Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]">
      <path d="M7 4.5h2.2c.4 0 .74.28.82.67l.64 3.2a.9.9 0 0 1-.26.84l-1.42 1.42a13 13 0 0 0 5.38 5.38l1.42-1.42a.9.9 0 0 1 .84-.26l3.2.64c.39.08.67.42.67.82V17c0 .83-.67 1.5-1.5 1.5A14.5 14.5 0 0 1 4.5 4.5C4.5 3.67 5.17 3 6 3h1Z" />
    </svg>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7" aria-label="Quick contact actions">
      <a
        href="https://wa.me/919999999999?text=Hello%20Shri%20Vitthal%20College%20of%20Agriculture%2C%20I%20want%20admission%20details."
        className="glass-panel group flex size-14 items-center justify-center rounded-full border border-white/70 text-[#1b5e20] hover:-translate-y-1 hover:bg-white"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon />
      </a>
      <a
        href="tel:+919999999999"
        className="glass-panel group flex size-14 items-center justify-center rounded-full border border-white/70 text-[#1b5e20] hover:-translate-y-1 hover:bg-white"
        aria-label="Call admissions office"
      >
        <PhoneIcon />
      </a>
    </div>
  );
}
