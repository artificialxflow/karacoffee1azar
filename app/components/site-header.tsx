import Link from "next/link";

const links = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/wholesale", label: "همکاری عمده" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="کاراکافی، صفحه اصلی">
          <span className="flex size-11 items-center justify-center rounded-xl bg-stone-800 text-lg font-bold text-amber-300">ک</span>
          <span>
            <span className="block text-lg font-bold leading-tight text-slate-900">کاراکافی</span>
            <span className="mt-1 block text-[10px] tracking-wide text-slate-500">کارخانه تخصصی قهوه</span>
          </span>
        </Link>

        <nav aria-label="منوی اصلی" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/admin" className="hidden rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 sm:block">
            ورود به پنل
          </Link>
          <Link href="/wholesale" className="rounded-xl bg-amber-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800">
            استعلام عمده
          </Link>
        </div>
      </div>
      <nav aria-label="منوی موبایل" className="flex gap-5 overflow-x-auto border-t border-slate-100 px-5 py-3 lg:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 text-xs font-medium text-slate-600">
            {link.label}
          </Link>
        ))}
        <Link href="/admin" className="shrink-0 text-xs font-medium text-slate-600 sm:hidden">پنل مدیریت</Link>
      </nav>
    </header>
  );
}
