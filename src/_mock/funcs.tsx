// ----------------------------------------------------------------------

export function randomNumber(number : any) {
  return Math.floor(Math.random() * number) + 1;
}

export function randomNumberRange(min : any, max : any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomInArray(array : any) {
  return array[Math.floor(Math.random() * array.length)];
}
