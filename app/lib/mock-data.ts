export type ProductCategory = "SINGLE_ORIGIN" | "BLEND" | "ESPRESSO";
export type RoastLevel = "LIGHT" | "MEDIUM" | "DARK";

export type Product = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: ProductCategory;
  roastLevel: RoastLevel;
  description: string;
  netWeightGrams: number;
  wholesalePriceRial: number;
  retailPriceRial: number;
  stockKg: number;
  isActive: boolean;
  origin: string;
  tastingNotes: string[];
  process: string;
};

export const products: Product[] = [
  {
    id: "product-001",
    sku: "KAR-ESP-01",
    name: "اسپرسو ترکیب کارا",
    slug: "kara-espresso",
    category: "BLEND",
    roastLevel: "MEDIUM",
    description: "ترکیب متعادل عربیکا و روبوستا با نت شکلات تلخ و مغزها؛ انتخابی یکدست برای منوی روزانه کافه.",
    netWeightGrams: 1000,
    wholesalePriceRial: 3850000,
    retailPriceRial: 4600000,
    stockKg: 86.5,
    isActive: true,
    origin: "ترکیب برزیل و هند",
    tastingNotes: ["شکلات تلخ", "فندق", "کارامل"],
    process: "ترکیبی",
  },
  {
    id: "product-002",
    sku: "KAR-ETH-01",
    name: "اتیوپی سیدامو",
    slug: "ethiopia-sidamo",
    category: "SINGLE_ORIGIN",
    roastLevel: "LIGHT",
    description: "قهوه تک‌خاستگاه با رایحه گل و طعم مرکبات؛ رُست روشن برای نمایان‌کردن شخصیت خاستگاه.",
    netWeightGrams: 250,
    wholesalePriceRial: 5680000,
    retailPriceRial: 1690000,
    stockKg: 24,
    isActive: true,
    origin: "اتیوپی، سیدامو",
    tastingNotes: ["یاس", "مرکبات", "هلو"],
    process: "شسته",
  },
];

export type OrderItem = {
  productId: string;
  productName: string;
  sku: string;
  quantityKg: number;
  unitPriceRial: number;
  lineTotalRial: number;
};

export type MockWholesaleOrder = {
  id: string;
  orderNumber: string;
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  province: string;
  city: string;
  deliveryAddress: string;
  items: OrderItem[];
  subtotalRial: number;
  discountRial: number;
  shippingCostRial: number;
  totalRial: number;
  status: "PENDING" | "CONFIRMED";
  requestedDeliveryAt: string;
  customerNote: string;
};

export const mockWholesaleOrders: MockWholesaleOrder[] = [
  {
    id: "order-001",
    orderNumber: "KC-1405-0081",
    businessName: "کافه نارون",
    contactName: "مریم کریمی",
    phone: "09121234567",
    email: "orders@narvancafe.ir",
    province: "تهران",
    city: "تهران",
    deliveryAddress: "خیابان ولیعصر، خیابان ناهید، پلاک ۲۱",
    items: [{
      productId: "product-001",
      productName: "اسپرسو ترکیب کارا",
      sku: "KAR-ESP-01",
      quantityKg: 12,
      unitPriceRial: 3850000,
      lineTotalRial: 46200000,
    }],
    subtotalRial: 46200000,
    discountRial: 1000000,
    shippingCostRial: 450000,
    totalRial: 45650000,
    status: "CONFIRMED",
    requestedDeliveryAt: "2026-11-26T08:00:00Z",
    customerNote: "ارسال در ساعات صبح",
  },
  {
    id: "order-002",
    orderNumber: "KC-1405-0082",
    businessName: "پخش قهوه سپهر",
    contactName: "امیر زمانی",
    phone: "09351234567",
    email: "buy@sepehrcoffee.ir",
    province: "اصفهان",
    city: "اصفهان",
    deliveryAddress: "خیابان چهارباغ بالا، کوچه ۱۲، پلاک ۸",
    items: [
      {
        productId: "product-001",
        productName: "اسپرسو ترکیب کارا",
        sku: "KAR-ESP-01",
        quantityKg: 20,
        unitPriceRial: 3750000,
        lineTotalRial: 75000000,
      },
      {
        productId: "product-002",
        productName: "اتیوپی سیدامو",
        sku: "KAR-ETH-01",
        quantityKg: 5,
        unitPriceRial: 5680000,
        lineTotalRial: 28400000,
      },
    ],
    subtotalRial: 103400000,
    discountRial: 0,
    shippingCostRial: 1200000,
    totalRial: 104600000,
    status: "PENDING",
    requestedDeliveryAt: "2026-11-29T08:00:00Z",
    customerNote: "پیش از ارسال هماهنگ شود",
  },
];

export function formatRial(value: number): string {
  return `${new Intl.NumberFormat("fa-IR").format(value)} ریال`;
}

export function formatToman(valueInRial: number): string {
  return `${new Intl.NumberFormat("fa-IR").format(Math.round(valueInRial / 10))} تومان`;
}

export function getProductCategoryLabel(category: ProductCategory): string {
  switch (category) {
    case "SINGLE_ORIGIN":
      return "تک‌خاستگاه";
    case "BLEND":
      return "ترکیبی";
    case "ESPRESSO":
      return "اسپرسو";
  }
}

export function getRoastLabel(roast: RoastLevel): string {
  switch (roast) {
    case "LIGHT":
      return "روشن";
    case "MEDIUM":
      return "متوسط";
    case "DARK":
      return "تیره";
  }
}
