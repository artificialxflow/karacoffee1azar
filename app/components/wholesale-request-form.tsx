"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { formatRial, formatToman, products, type OrderItem } from "../lib/mock-data";

type DraftItem = {
  productId: string;
  quantityKg: number;
};

type Quote = {
  orderNumber: string;
  businessName: string;
  contactName: string;
  phone: string;
  province: string;
  city: string;
  items: OrderItem[];
  subtotalRial: number;
  discountRial: number;
  shippingCostRial: number;
  totalRial: number;
  status: "PENDING";
};

const fieldClass = "mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100";

export function WholesaleRequestFormFromQuery() {
  const searchParams = useSearchParams();
  const requestedProduct = searchParams.get("product");
  const initialProductId = products.find((product) => product.slug === requestedProduct)?.id ?? products[0].id;

  return <WholesaleRequestForm key={initialProductId} initialProductId={initialProductId} />;
}

export function WholesaleRequestForm({ initialProductId }: { initialProductId: string }) {
  const [draftItems, setDraftItems] = useState<DraftItem[]>([{ productId: initialProductId, quantityKg: 5 }]);
  const [quote, setQuote] = useState<Quote | null>(null);

  function updateItem(index: number, patch: Partial<DraftItem>) {
    setDraftItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item));
    setQuote(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items: OrderItem[] = draftItems.map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      if (!product) throw new Error(`محصول نامعتبر است: ${item.productId}`);
      const lineTotalRial = Math.round(product.wholesalePriceRial * item.quantityKg);
      return {
        productId: product.id,
        productName: product.name,
        sku: product.sku,
        quantityKg: item.quantityKg,
        unitPriceRial: product.wholesalePriceRial,
        lineTotalRial,
      };
    });

    const subtotalRial = items.reduce((total, item) => total + item.lineTotalRial, 0);
    const totalKg = items.reduce((total, item) => total + item.quantityKg, 0);
    const discountRial = totalKg >= 50 ? Math.round(subtotalRial * 0.05) : 0;
    const shippingCostRial = 450000;

    setQuote({
      orderNumber: "KC-1405-0099",
      businessName: String(formData.get("businessName")),
      contactName: String(formData.get("contactName")),
      phone: String(formData.get("phone")),
      province: String(formData.get("province")),
      city: String(formData.get("city")),
      items,
      subtotalRial,
      discountRial,
      shippingCostRial,
      totalRial: subtotalRial - discountRial + shippingCostRial,
      status: "PENDING",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="border-b border-slate-100 pb-6">
          <h2 className="text-2xl font-bold text-slate-900">درخواست پیش‌فاکتور</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">اطلاعات کسب‌وکار و اقلام موردنیاز را وارد کنید.</p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            نام کافه یا کسب‌وکار <span className="text-rose-600">*</span>
            <input className={fieldClass} name="businessName" autoComplete="organization" required placeholder="مثلاً کافه نارون" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            نام شخص پاسخ‌گو <span className="text-rose-600">*</span>
            <input className={fieldClass} name="contactName" autoComplete="name" required placeholder="نام و نام خانوادگی" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            شماره تماس <span className="text-rose-600">*</span>
            <input className={fieldClass} name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="0[0-9۰-۹]{10}" placeholder="09121234567" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            ایمیل
            <input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="name@example.com" dir="ltr" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            استان <span className="text-rose-600">*</span>
            <input className={fieldClass} name="province" autoComplete="address-level1" required placeholder="تهران" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            شهر <span className="text-rose-600">*</span>
            <input className={fieldClass} name="city" autoComplete="address-level2" required placeholder="تهران" />
          </label>
          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            نشانی تحویل <span className="text-rose-600">*</span>
            <textarea className={`${fieldClass} min-h-24 resize-y`} name="deliveryAddress" autoComplete="street-address" required placeholder="نشانی کامل محل تحویل" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            تاریخ درخواستی تحویل
            <input className={fieldClass} name="requestedDeliveryAt" type="date" />
          </label>
        </div>

        <fieldset className="mt-9">
          <legend className="text-lg font-bold text-slate-900">اقلام سفارش</legend>
          <div className="mt-4 space-y-4">
            {draftItems.map((item, index) => (
              <div key={index} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[1fr_180px_auto] sm:items-end">
                <label className="text-sm font-semibold text-slate-700">
                  محصول
                  <select
                    className={fieldClass}
                    name={`items[${index}].productId`}
                    value={item.productId}
                    onChange={(event) => updateItem(index, { productId: event.target.value })}
                  >
                    {products.filter((product) => product.isActive).map((product) => (
                      <option key={product.id} value={product.id}>{product.name} — {formatToman(product.wholesalePriceRial)}/کیلو</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  مقدار (کیلوگرم)
                  <input
                    className={fieldClass}
                    name={`items[${index}].quantityKg`}
                    type="number"
                    min="1"
                    step="0.5"
                    required
                    value={item.quantityKg}
                    onChange={(event) => updateItem(index, { quantityKg: Math.max(0, Number(event.target.value)) })}
                  />
                </label>
                {draftItems.length > 1 ? (
                  <button type="button" onClick={() => { setDraftItems((current) => current.filter((_, itemIndex) => itemIndex !== index)); setQuote(null); }} className="rounded-xl px-4 py-3 text-sm font-semibold text-rose-700 hover:bg-rose-50">حذف قلم</button>
                ) : <span />}
              </div>
            ))}
          </div>
          <button type="button" onClick={() => { setDraftItems((current) => [...current, { productId: products[0].id, quantityKg: 1 }]); setQuote(null); }} className="mt-4 rounded-xl border border-amber-300 px-4 py-2.5 text-sm font-semibold text-amber-800 transition hover:bg-amber-50">
            + افزودن محصول
          </button>
        </fieldset>

        <label className="mt-7 block text-sm font-semibold text-slate-700">
          توضیحات یا درخواست ویژه
          <textarea className={`${fieldClass} min-h-24 resize-y`} name="customerNote" placeholder="زمان مناسب تحویل، نوع آسیاب یا توضیحات دیگر" />
        </label>
        <p className="mt-6 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">
          فیلدهای فرم با قرارداد `WholesaleOrder` هماهنگ هستند. مبلغ و شماره پیش‌فاکتور صرفاً نمایشی است و در این مرحله سفارشی در سامانه ثبت نمی‌شود.
        </p>
        <button type="submit" className="mt-6 w-full rounded-xl bg-amber-700 px-6 py-3.5 font-bold text-white transition hover:bg-amber-800 sm:w-auto">
          محاسبه و نمایش پیش‌فاکتور
        </button>
      </form>

      {quote && (
        <section aria-live="polite" className="mt-8 rounded-3xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">پیش‌فاکتور آزمایشی</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{quote.businessName}</h2>
              <p className="mt-2 text-sm text-slate-500">{quote.contactName} · {quote.phone} · {quote.city}، {quote.province}</p>
            </div>
            <div className="sm:text-left">
              <p className="text-xs text-slate-500">شمارهٔ نمونه</p>
              <p className="mt-1 font-bold text-slate-800" dir="ltr">{quote.orderNumber}</p>
              <p className="mt-2 text-xs text-amber-800">در انتظار بررسی (PENDING)</p>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {quote.items.map((item) => (
              <div key={item.productId} className="flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{item.productName}</p>
                  <p className="mt-1 text-xs text-slate-500">{new Intl.NumberFormat("fa-IR").format(item.quantityKg)} کیلوگرم × {formatRial(item.unitPriceRial)}</p>
                </div>
                <p className="font-bold text-slate-800">{formatRial(item.lineTotalRial)}</p>
              </div>
            ))}
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-slate-600">جمع اقلام</dt><dd className="font-semibold">{formatRial(quote.subtotalRial)}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-slate-600">تخفیف آزمایشی</dt><dd className="font-semibold text-emerald-700">{formatRial(quote.discountRial)}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-slate-600">هزینهٔ ارسال آزمایشی</dt><dd className="font-semibold">{formatRial(quote.shippingCostRial)}</dd></div>
          </dl>
          <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <span className="font-semibold text-slate-700">مبلغ نهایی پیش‌فاکتور</span>
            <span className="text-2xl font-bold text-amber-800">{formatRial(quote.totalRial)} <span className="block text-sm font-medium text-slate-500 sm:inline">({formatToman(quote.totalRial)})</span></span>
          </div>
        </section>
      )}
    </div>
  );
}
