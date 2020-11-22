export const isTypeOf = (() => {
  const type = Object.create(null)
  type.null = x => x === null
  type.undefined = x => x === undefined
  type.nil = x => type.null(x) || type.undefined(x)
  type.string = x => typeof x === 'string'
  type.number = x =>
    typeof x === 'number' &&
    !isNaN(x) &&
    isFinite(x)
  type.boolean = x => typeof x === 'boolean'
  type.array = x => Array.isArray(x)
  type.object = x => ({}).toString.call(x) === '[object Object]'
  type.set = x => x instanceof Set
  type.map = x => x instanceof Map
  type.date = x => x instanceof Date
  return type
})()

export function isEmpty(x) {
  if (isTypeOf.array(x) || isTypeOf.string(x)) return x.length === 0
  if (isTypeOf.set(x) || isTypeOf.map(x)) return x.size === 0
  if (isTypeOf.object(x)) return Object.keys(x).length === 0
  return false
}

export function getLast(list) {
  if (isTypeOf.array(list)) return list.slice(-1)[0]
  if (isTypeOf.set(list)) return Array.from(list).slice(-1)[0]
  if (isTypeOf.map(list)) return Array.from(list.values()).slice(-1)[0]
}

export const deepClone = obj => {
  let clone = obj;
  if (obj && typeof obj === "object") {
    clone = new obj.constructor()

    Object.getOwnPropertyNames(obj).forEach(
      prop => (clone[prop] = deepClone(obj[prop]))
    )
  }
  return clone
};
