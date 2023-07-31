function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  const litersPerGallon = 4.54609188;
  const kilometersPerMile = 1.609344;
  const kplValue = (mpg * kilometersPerMile) / litersPerGallon;
  return +kplValue.toFixed(2); // The '+' converts the value to a number

}