const FORMAT__CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const format = (number: number) => {
  return FORMAT__CURRENCY.format(number);
};
