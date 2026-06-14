import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="glass-panel container-shell flex items-center justify-between rounded-[1.6rem] border border-white/70 py-3.5"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Shri Vitthal College of Agriculture home">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#1b5e20] text-sm font-bold text-white shadow-lg shadow-[#1b5e20]/20">
            SV
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.26em] text-[#1b5e20]">Shri Vitthal</span>
            <span className="block truncate font-display text-base font-extrabold text-[#191d17] sm:text-lg">
              College of Agriculture
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[#1b5e20]/10 bg-white/60 p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#41493e] hover:bg-[#1b5e20] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="accent-button shrink-0 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] sm:px-5 sm:text-sm">
          Apply Now
        </Link>
      </nav>
    </header>
  );
}
