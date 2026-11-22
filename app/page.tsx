import Link from "next/link";
import { ProductCard } from "./components/product-card";
import { products } from "./lib/mock-data";

const features = [
  {
    number: "۰۱",
    title: "انتخاب دقیق دانه",
    description: "هر محموله بر اساس خاستگاه، فرآوری و کیفیت فنجان ارزیابی می‌شود.",
  },
  {
    number: "۰۲",
    title: "رُست کنترل‌شده",
    description: "پروفایل هر قهوه متناسب با ویژگی دانه و کاربرد نهایی تنظیم می‌شود.",
  },
  {
    number: "۰۳",
    title: "تازگی در هر بچ",
    description: "تولید بچ‌به‌بچ و بسته‌بندی منظم برای حفظ عطر و طعم قهوه.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_40%,rgba(180,83,9,0.28),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
              <span className="size-2 rounded-full bg-amber-400" />
              کارخانه تولید و رُست تخصصی قهوه
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-[1.55] text-white sm:text-5xl lg:text-6xl">
              از دانهٔ سبز
              <span className="block text-amber-300">تا فنجانِ به‌یادماندنی</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
              در کاراکافی، هر بچ قهوه با انتخاب مسئولانهٔ دانه، رُست دقیق و توجه به نیاز کسب‌وکار شما آماده می‌شود.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-xl bg-amber-600 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-500">
                دیدن محصولات
              </Link>
              <Link href="/wholesale" className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-amber-300/60 hover:bg-white/5">
                درخواست همکاری عمده
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7 text-sm text-stone-300">
              <span><strong className="text-xl text-white">تازه</strong><span className="mr-2">رُست بچ‌به‌بچ</span></span>
              <span><strong className="text-xl text-white">دقیق</strong><span className="mr-2">کنترل کیفیت</span></span>
              <span><strong className="text-xl text-white">پایدار</strong><span className="mr-2">تأمین منظم</span></span>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center">
            <div className="absolute inset-5 rounded-full border border-amber-100/10" />
            <div className="absolute inset-14 rounded-full border border-amber-100/10" />
            <div className="absolute inset-24 rounded-full bg-amber-700/20 blur-3xl" />
            <div className="relative flex aspect-square w-[68%] items-center justify-center rounded-full border border-amber-200/20 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950 shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-4 rounded-full border border-dashed border-amber-100/20" />
              <div className="flex size-40 items-center justify-center rounded-full border border-amber-200/30 bg-stone-900/70 text-center shadow-inner sm:size-52">
                <div>
                  <span className="block text-5xl text-amber-300">ک</span>
                  <span className="mt-2 block text-sm tracking-[0.3em] text-stone-300">رُست کارا</span>
                </div>
              </div>
              <span className="absolute -right-7 top-1/4 rounded-xl border border-white/10 bg-stone-800/90 px-4 py-3 text-sm text-stone-200 shadow-xl">پروفایل اختصاصی</span>
              <span className="absolute -left-8 bottom-1/4 rounded-xl border border-white/10 bg-stone-800/90 px-4 py-3 text-sm text-stone-200 shadow-xl">کنترل بچ تولید</span>
            </div>
            <span className="absolute bottom-7 right-1/2 translate-x-1/2 text-xs tracking-[0.35em] text-stone-500">KARACOFFEE ROASTERY</span>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold text-amber-700">از کارخانهٔ کاراکافی</p>
              <h2 className="mt-4 text-3xl font-bold leading-relaxed text-slate-900 sm:text-4xl">فرایند خوب، طعم قابل اعتماد می‌سازد</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-start">
              هر مرحله از دریافت دانهٔ سبز تا رُست و بسته‌بندی با دقت انجام می‌شود تا قهوه‌ای تازه، یکدست و مناسب سرو حرفه‌ای به دست شما برسد.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.number} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                <span className="text-sm font-bold tracking-widest text-amber-700">{feature.number}</span>
                <h3 className="mt-7 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-amber-700">انتخاب کاراکافی</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">قهوه برای هر سلیقه</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">از ترکیب‌های همه‌پسند اسپرسو تا قهوه‌های تک‌خاستگاه با شخصیت منحصربه‌فرد.</p>
            </div>
            <Link href="/products" className="font-semibold text-amber-800 hover:text-amber-900">مشاهدهٔ همه محصولات ←</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">برای کافه‌ها و کسب‌وکارها</span>
            <h2 className="mt-6 text-3xl font-bold leading-relaxed text-slate-900 sm:text-4xl">همراهی که کیفیت فنجان شما را می‌شناسد</h2>
            <p className="mt-5 leading-8 text-slate-600">
              تأمین منظم، پیشنهاد محصول متناسب با منو و پاسخ‌گویی مستقیم؛ همکاری عمدهٔ کاراکافی برای آن ساخته شده که بتوانید روی قهوه‌تان حساب کنید.
            </p>
            <Link href="/wholesale" className="mt-7 inline-flex rounded-xl bg-stone-800 px-6 py-3.5 font-semibold text-white transition hover:bg-stone-900">آشنایی با همکاری عمده</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["تأمین قابل برنامه‌ریزی", "موجودی و زمان تحویل متناسب با ریتم کسب‌وکار شما."],
              ["مشاوره انتخاب قهوه", "پیشنهاد خاستگاه و درجهٔ رُست براساس روش سرو."],
              ["کیفیت بچ‌به‌بچ", "توجه به مشخصات رُست و ثبات عطر و طعم."],
              ["پاسخ‌گویی مستقیم", "ارتباط ساده با تیم فروش و پشتیبانی کاراکافی."],
            ].map(([title, description], index) => (
              <article key={title} className={`rounded-2xl border border-slate-200 p-6 ${index === 0 ? "bg-amber-50" : "bg-white"}`}>
                <span className="flex size-10 items-center justify-center rounded-xl bg-stone-800 text-sm font-bold text-amber-300">۰{new Intl.NumberFormat("fa-IR").format(index + 1)}</span>
                <h3 className="mt-5 font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-amber-700 px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-100">شروع همکاری با کاراکافی</p>
            <h2 className="mt-4 text-3xl font-bold leading-relaxed sm:text-4xl">برای سفارش عمده آماده‌اید؟</h2>
            <p className="mt-4 leading-7 text-amber-50">نیازتان را بگویید تا پیشنهاد اولیه و پیش‌فاکتور آزمایشی را ببینید.</p>
          </div>
          <Link href="/wholesale" className="mt-8 inline-flex shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-amber-900 transition hover:bg-amber-50 lg:mt-0">ثبت درخواست عمده ←</Link>
        </div>
      </section>
    </>
  );
}
