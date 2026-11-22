"use client";

import { useState, type FormEvent } from "react";

const fieldClass = "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">برای ما پیام بگذارید</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">فرم نمایشی است و اطلاعات جایی ذخیره نمی‌شود.</p>
      <div className="mt-7 space-y-5">
        <label className="block text-sm font-semibold text-slate-700">
          نام و نام خانوادگی
          <input className={fieldClass} name="contactName" required autoComplete="name" placeholder="نام شما" />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          شماره تماس
          <input className={fieldClass} name="phone" type="tel" inputMode="tel" required placeholder="شماره تماس" />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          موضوع پیام
          <select className={fieldClass} name="subject" defaultValue="product">
            <option value="product">پرسش دربارهٔ محصولات</option>
            <option value="wholesale">همکاری عمده</option>
            <option value="other">سایر موضوعات</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          پیام شما
          <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required placeholder="چطور می‌توانیم کمک کنیم؟" />
        </label>
      </div>
      <button type="submit" className="mt-6 rounded-xl bg-amber-700 px-6 py-3.5 font-bold text-white transition hover:bg-amber-800">ارسال پیام</button>
      {submitted && <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">پیام شما در پیش‌نمایش ثبت شد. در این نسخه اطلاعات ذخیره یا ارسال نمی‌شود.</p>}
    </form>
  );
}
