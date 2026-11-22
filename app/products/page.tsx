import type { Metadata } from "next";
import { ProductGrid } from "../components/product-grid";

export const metadata: Metadata = {
  title: "محصولات قهوه | کاراکافی",
  description: "کاتالوگ قهوه‌های تازه‌رُست کاراکافی برای کافه‌ها و دوست‌داران قهوه.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-amber-700">کاتالوگ کاراکافی</p>
        <h1 className="mt-4 text-4xl font-bold leading-relaxed text-slate-900 sm:text-5xl">قهوهٔ تازه‌رُست، انتخاب شما</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">محصولات را بر اساس خاستگاه، ترکیب و درجهٔ رُست بررسی کنید. برای قیمت همکاری و سفارش کافه‌ای، درخواست عمده ثبت کنید.</p>
      </div>
      <div className="mt-12">
        <ProductGrid />
      </div>
    </div>
  );
}
