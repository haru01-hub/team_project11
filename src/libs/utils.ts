const CURRENCY_FORMATTER = new Intl.NumberFormat('ko-kR', {
  style: 'currency',
  currency: 'KRW',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const round2 = (value: number | string) => {
  if (typeof value === 'number') {
    return Math.round((value + Number.EPSILON) * 100) / 100 // avoid rounding errors
  } else if (typeof value === 'string') {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100
  } else {
    throw new Error('value is not a number nor a string')
  }
}

export function formatCurrency(amount: number | string | null) {
  if (typeof amount === 'number') {
    return CURRENCY_FORMATTER.format(amount)
  } else if (typeof amount === 'string') {
    return CURRENCY_FORMATTER.format(Number(amount))
  } else {
    return 'NaN'
  }
}
