export default function priceFormat(value) {
  return new Intl.NumberFormat('ru').format(value);
}
