import type { Metadata } from "next";
import { Suspense } from "react";
import { WholesaleRequestFormFromQuery } from "../components/wholesale-request-form";

export const metadata: Metadata = {
  title: "همکاری و سفارش عمده | کاراکافی",
  description: "ثبت درخواست همکاری و دریافت پیش‌فاکتور آزمایشی قهوه عمده از کاراکافی.",
};

export default function WholesalePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-sm font-bold text-amber-700">همکاری تجاری با کاراکافی</p>
          <h1 className="mt-4 text-4xl font-bold leading-relaxed text-slate-900 sm:text-5xl">قهوهٔ خوب، برای کسب‌وکار شما</h1>
          <p className="mt-5 leading-8 text-slate-600">
            فرم را تکمیل کنید تا پیش‌فاکتور نمونه بر اساس محصولات و مقدار درخواستی نمایش داده شود. این نسخهٔ آزمایشی اطلاعات را ذخیره یا ارسال نمی‌کند.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ["تأمین برنامه‌پذیر", "پیشنهاد مقدار و زمان تحویل متناسب با مصرف شما."],
              ["قیمت شفاف", "محاسبهٔ آزمایشی براساس قیمت عمدهٔ هر محصول."],
              ["پاسخ‌گویی تیم فروش", "برای نهایی‌کردن سفارش، تیم ما با شما هماهنگ می‌شود."],
            ].map(([title, description], index) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-900">۰{new Intl.NumberFormat("fa-IR").format(index + 1)}</span>
                <div>
                  <h2 className="font-bold text-slate-900">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl bg-stone-800 p-6 text-stone-200">
            <p className="text-sm text-stone-400">برای گفت‌وگوی مستقیم</p>
            <a href="tel:+982188800000" dir="ltr" className="mt-2 inline-block text-xl font-bold text-white">۰۲۱-۸۸۸۰-۰۰۰۰</a>
          </div>
        </div>
        <Suspense fallback={<div className="min-h-[700px] rounded-3xl border border-slate-200 bg-white p-8" />}>
          <WholesaleRequestFormFromQuery />
        </Suspense>
      </div>
    </div>
  );
}
