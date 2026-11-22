import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="text-xl font-bold text-white">کاراکافی</Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-400">
            از انتخاب دانه تا رُست نهایی، قهوه‌ای دقیق و تازه برای کافه‌ها، رستوران‌ها و دوست‌داران قهوه.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-white">دسترسی سریع</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-400">
            <li><Link href="/products" className="transition hover:text-amber-300">کاتالوگ محصولات</Link></li>
            <li><Link href="/wholesale" className="transition hover:text-amber-300">درخواست همکاری عمده</Link></li>
            <li><Link href="/about" className="transition hover:text-amber-300">درباره کاراکافی</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">ارتباط با ما</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-400">
            <li><a href="tel:+982188800000" dir="ltr" className="inline-block hover:text-amber-300">۰۲۱-۸۸۸۰-۰۰۰۰</a></li>
            <li><a href="mailto:hello@karacoffee.ir" className="hover:text-amber-300">hello@karacoffee.ir</a></li>
            <li>تهران، شهرک صنعتی، کارخانه کاراکافی</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-stone-500 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <span>© کاراکافی — تولید و رُست تخصصی قهوه</span>
          <span>تازگی، دقت و کیفیت در هر بچ رُست</span>
        </div>
      </div>
    </footer>
  );
}
