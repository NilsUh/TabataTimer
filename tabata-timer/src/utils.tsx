function pad(num: number | string, size: number): string {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function calcMinSec(seconds: number): [number, number] {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return [mins, secs];
}

export function getMinSecString(seconds: number): string {
  const [mins, secs] = calcMinSec(seconds);
  return pad(mins.toString(), 2) + ":" + pad(secs.toString(), 2);
}
