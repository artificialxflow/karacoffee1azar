import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";

export const metadata: Metadata = {
  title: "تماس با ما | کاراکافی",
  description: "راه‌های ارتباط با کاراکافی برای پرسش، پشتیبانی و همکاری.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-amber-700">در ارتباط باشیم</p>
        <h1 className="mt-4 text-4xl font-bold leading-relaxed text-slate-900 sm:text-5xl">تماس با کاراکافی</h1>
        <p className="mt-5 leading-8 text-slate-600">برای پرسش دربارهٔ محصولات، پیگیری همکاری یا دریافت راهنمایی با ما در ارتباط باشید.</p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="font-bold text-slate-900">راه‌های ارتباطی</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs text-slate-500">تلفن کارخانه</dt>
                <dd className="mt-2"><a href="tel:+982188800000" dir="ltr" className="inline-block font-semibold text-slate-900 hover:text-amber-800">۰۲۱-۸۸۸۰-۰۰۰۰</a></dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">پست الکترونیکی</dt>
                <dd className="mt-2"><a href="mailto:hello@karacoffee.ir" className="font-semibold text-slate-900 hover:text-amber-800">hello@karacoffee.ir</a></dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">نشانی</dt>
                <dd className="mt-2 leading-7 text-slate-700">تهران، شهرک صنعتی، کارخانه کاراکافی</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">ساعات پاسخ‌گویی</dt>
                <dd className="mt-2 text-sm text-slate-700">شنبه تا چهارشنبه، ۹ تا ۱۷</dd>
              </div>
            </dl>
          </section>
          <div className="flex min-h-48 items-end overflow-hidden rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_25%_30%,#fde68a,transparent_30%),linear-gradient(135deg,#e7e5e4,#f8fafc)] p-6">
            <div className="rounded-xl border border-white/80 bg-white/80 px-4 py-3 backdrop-blur">
              <p className="text-xs text-slate-500">موقعیت کارخانه</p>
              <p className="mt-1 font-semibold text-slate-900">تهران، شهرک صنعتی</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
