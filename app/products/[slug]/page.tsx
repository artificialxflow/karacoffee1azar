import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatToman, getProductCategoryLabel, getRoastLabel, products } from "../../lib/mock-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product ? `${product.name} | کاراکافی` : "محصول پیدا نشد | کاراکافی",
    description: product?.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <Link href="/products" className="text-sm font-semibold text-slate-500 hover:text-amber-800">← بازگشت به محصولات</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 p-8 sm:p-12">
          <div className="absolute -left-10 -top-10 size-80 rounded-full border border-white/70" />
          <div className="absolute left-12 top-12 size-56 rounded-full border border-white/60" />
          <div className="absolute left-1/3 top-1/3 size-48 rounded-full bg-amber-900/10 blur-3xl" />
          <div className="relative flex size-40 items-center justify-center rounded-full border border-white/80 bg-white/40 text-center shadow-inner backdrop-blur-sm">
            <span className="text-lg font-bold leading-8 text-stone-800">رُست<br />تازهٔ کارا</span>
          </div>
          <span className="absolute bottom-10 right-10 max-w-[55%] text-2xl font-bold leading-10 text-stone-900">{product.name}</span>
        </div>
        <div className="py-2">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900">{getProductCategoryLabel(product.category)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">رُست {getRoastLabel(product.roastLevel)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{product.sku}</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-relaxed text-slate-900">{product.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">قیمت همکاری، هر کیلوگرم</p>
            <p className="mt-2 text-2xl font-bold text-amber-800">{formatToman(product.wholesalePriceRial)}</p>
            <p className="mt-2 text-xs text-slate-500">قیمت نهایی با توجه به مقدار سفارش و شرایط همکاری اعلام می‌شود.</p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["خاستگاه", product.origin],
              ["فرآوری", product.process],
              ["وزن بسته", `${new Intl.NumberFormat("fa-IR").format(product.netWeightGrams)} گرم`],
              ["موجودی نمایشی", `${new Intl.NumberFormat("fa-IR").format(product.stockKg)} کیلوگرم`],
            ].map(([term, value]) => (
              <div key={term} className="rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs text-slate-500">{term}</dt>
                <dd className="mt-2 font-semibold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <h2 className="font-bold text-slate-900">یادداشت‌های طعمی</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.tastingNotes.map((note) => <span key={note} className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">{note}</span>)}
            </div>
          </div>
          <Link href={`/wholesale?product=${product.slug}`} className="mt-9 inline-flex rounded-xl bg-amber-700 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-800">استعلام و سفارش عمده</Link>
        </div>
      </div>
    </div>
  );
}
