import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره ما | کاراکافی",
  description: "با کارخانه، رویکرد تولید و فرایند رُست تخصصی کاراکافی آشنا شوید.",
};

const principles = [
  ["شناخت دانه", "هر خاستگاه و هر محموله را با ویژگی‌های خودش می‌سنجیم؛ کیفیت از انتخاب درست دانه آغاز می‌شود."],
  ["رُست با هدف", "پروفایل رُست را متناسب با ماهیت قهوه و شیوهٔ دم‌آوری موردنظر طراحی می‌کنیم."],
  ["تولید مسئولانه", "ثبت بچ‌های تولید و توجه به تازگی، مسیر رسیدن قهوهٔ خوب به فنجان را قابل پیگیری می‌کند."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-stone-900">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-bold text-amber-300">داستان کاراکافی</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-relaxed text-white sm:text-5xl">
            قهوهٔ خوب، نتیجهٔ توجه به جزئیات است
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            کاراکافی کارخانه‌ای برای انتخاب، تولید و رُست تخصصی قهوه است؛ با نگاهی دقیق به کیفیت دانه و نیاز کسانی که هر روز قهوه سرو می‌کنند.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-bold text-amber-700">از دانه تا بسته</p>
            <h2 className="mt-4 text-3xl font-bold leading-relaxed text-slate-900">فرایندی روشن، کیفیتی پایدار</h2>
            <p className="mt-5 leading-8 text-slate-600">
              از ارزیابی دانهٔ سبز و برنامه‌ریزی تولید تا تنظیم پروفایل، رُست، استراحت و بسته‌بندی، هر مرحله بخشی از یک فرایند منسجم است. این نگاه به ما کمک می‌کند برای هر محصول، تجربه‌ای متناسب با کاربرد آن بسازیم.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              در همکاری با کافه‌ها، رستوران‌ها و پخش‌کنندگان، به کیفیت فنجان و تداوم تأمین به یک اندازه اهمیت می‌دهیم.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-amber-100 p-8 sm:col-span-2">
              <span className="text-xs font-bold tracking-widest text-amber-900">KARACOFFEE ROASTERY</span>
              <p className="mt-8 max-w-lg text-2xl font-bold leading-relaxed text-stone-900">«هر بچ رُست، فرصتی برای دقیق‌تر کردن طعم است.»</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-3xl font-bold text-amber-800">تازگی</span>
              <p className="mt-3 text-sm leading-6 text-slate-600">توجه به زمان رُست و بسته‌بندی</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-3xl font-bold text-amber-800">دقت</span>
              <p className="mt-3 text-sm leading-6 text-slate-600">توجه به ویژگی هر خاستگاه</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-bold text-amber-700">نگاه ما به تولید</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">اصولی که هر روز دنبال می‌کنیم</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
                <span className="text-sm font-bold text-amber-700">۰{new Intl.NumberFormat("fa-IR").format(index + 1)}</span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-stone-800 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h2 className="text-xl font-bold">به دنبال شریک تأمین قهوه هستید؟</h2>
              <p className="mt-2 text-sm leading-6 text-stone-300">دربارهٔ نیاز کسب‌وکارتان با ما گفت‌وگو کنید.</p>
            </div>
            <Link href="/wholesale" className="shrink-0 rounded-xl bg-amber-600 px-5 py-3 text-center font-semibold transition hover:bg-amber-500">درخواست همکاری</Link>
          </div>
        </div>
      </section>
    </>
  );
}
