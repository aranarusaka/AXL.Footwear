export const STORE_NAME = 'AXL.Footwear';

export const CATEGORIES = [
  "Men's Collection",
  "Women's Collection",
  "Sport Collection"
] as const;

export const PAYMENT_METHODS = [
  'credit',
  'debit',
  'gopay',
  'ovo'
] as const;

export const ORDER_STATUS = [
  'pending',
  'processing',
  'shipped',
  'delivered'
] as const;

export const TAX_RATE = 0.1; // 10% tax rate