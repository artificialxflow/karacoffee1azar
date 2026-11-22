"use client";

import { useMemo, useState } from "react";
import { products, type ProductCategory, type RoastLevel } from "../lib/mock-data";
import { ProductCard } from "./product-card";

export function ProductGrid() {
  const [category, setCategory] = useState<ProductCategory | "ALL">("ALL");
  const [roast, setRoast] = useState<RoastLevel | "ALL">("ALL");
  const filteredProducts = useMemo(
    () => products.filter((product) =>
      (category === "ALL" || product.category === category) &&
      (roast === "ALL" || product.roastLevel === roast),
    ),
    [category, roast],
  );

  return (
    <>
      <div className="mb-10 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-end">
        <label className="flex-1 text-sm font-semibold text-slate-700">
          دسته‌بندی
          <select value={category} onChange={(event) => setCategory(event.target.value as ProductCategory | "ALL")} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal text-slate-800 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100">
            <option value="ALL">همه محصولات</option>
            <option value="SINGLE_ORIGIN">تک‌خاستگاه</option>
            <option value="BLEND">ترکیبی</option>
            <option value="ESPRESSO">اسپرسو</option>
          </select>
        </label>
        <label className="flex-1 text-sm font-semibold text-slate-700">
          درجه رُست
          <select value={roast} onChange={(event) => setRoast(event.target.value as RoastLevel | "ALL")} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal text-slate-800 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100">
            <option value="ALL">همه درجه‌ها</option>
            <option value="LIGHT">روشن</option>
            <option value="MEDIUM">متوسط</option>
            <option value="DARK">تیره</option>
          </select>
        </label>
        <p className="pb-3 text-sm text-slate-500">{new Intl.NumberFormat("fa-IR").format(filteredProducts.length)} محصول</p>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-600">
          محصولی با این فیلترها پیدا نشد.
        </div>
      )}
    </>
  );
}
