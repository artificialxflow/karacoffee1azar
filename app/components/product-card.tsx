import Link from "next/link";
import {
  formatToman,
  getProductCategoryLabel,
  getRoastLabel,
  type Product,
} from "../lib/mock-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative flex h-56 items-end overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 p-6">
          <div className="absolute -left-8 -top-12 size-48 rounded-full border border-white/60" />
          <div className="absolute -left-1 top-8 size-36 rounded-full border border-white/50" />
          <div className="absolute bottom-8 left-12 size-24 rounded-full bg-amber-900/10 blur-2xl" />
          <div className="relative flex size-28 items-center justify-center rounded-full border border-white/70 bg-white/40 text-center shadow-inner backdrop-blur-sm">
            <span className="text-sm font-bold leading-6 text-stone-800">رُست<br />تازه</span>
          </div>
          <span className="absolute right-5 top-5 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-stone-700">
            {getProductCategoryLabel(product.category)}
          </span>
          <span className="absolute bottom-6 right-6 max-w-[55%] text-right text-xl font-bold leading-8 text-stone-900">
            {product.name}
          </span>
        </div>
        <div className="p-6">
          <p className="line-clamp-2 min-h-14 text-sm leading-7 text-slate-600">{product.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">رُست {getRoastLabel(product.roastLevel)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{product.origin}</span>
          </div>
          <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">
            <div>
              <span className="block text-xs text-slate-500">قیمت عمده، هر کیلو</span>
              <span className="mt-1 block font-bold text-amber-800">{formatToman(product.wholesalePriceRial)}</span>
            </div>
            <span className="text-sm font-semibold text-stone-700 transition group-hover:text-amber-700">مشاهده محصول ←</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
