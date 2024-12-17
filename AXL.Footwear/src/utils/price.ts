export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const calculateTax = (subtotal: number, taxRate: number = 0.1): number => {
  return subtotal * taxRate;
};

export const calculateTotal = (subtotal: number, taxRate: number = 0.1): number => {
  const tax = calculateTax(subtotal, taxRate);
  return subtotal + tax;
};