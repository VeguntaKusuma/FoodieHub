export function formatPrice(amount, currency = 'USD') {
  const n = Number(amount)
  if (!Number.isFinite(n)) return '$0.00'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(n)
}

