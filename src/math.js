export function randomNumber(max = 1, min = 0) {
  if (min >= max) return max;
  return Math.floor(Math.random() * (max - min) + min);
}

export function range(maxOrStart, end, step = 1) {
  if (arguments.length === 1) return Array.from({ length: maxOrStart }, (_, i) => i)
  return Array.from(
    { length: Math.ceil(((end - maxOrStart) / step)) },
    (_, i) => (i * step) + maxOrStart
  )
}
