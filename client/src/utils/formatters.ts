export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount)
}