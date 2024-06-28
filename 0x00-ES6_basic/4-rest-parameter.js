export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total++;
  }
  return total;
}
