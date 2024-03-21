export function convertToPercentage(number) {
  const numberAsString = number.toString();

  const numberWithDot = numberAsString.replace(",", ".");

  const percentage = parseFloat(numberWithDot) * 100;

  return percentage.toFixed(2) + "%";
}
