export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7" aria-label="Quick contact actions">
      <a href="https://wa.me/919999999999?text=Hello%20Shri%20Vitthal%20College%20of%20Agriculture%2C%20I%20want%20admission%20details." className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-700/30 transition hover:-translate-y-1" aria-label="Chat on WhatsApp">
        <span className="text-2xl" aria-hidden>☘</span>
      </a>
      <a href="tel:+919999999999" className="group flex size-14 items-center justify-center rounded-full bg-soil text-white shadow-2xl shadow-soil/30 transition hover:-translate-y-1" aria-label="Call admissions office">
        <span className="text-2xl" aria-hidden>☎</span>
      </a>
    </div>
  );
}
