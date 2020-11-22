import { getLast, deepClone } from './src/index.js'

const a = {
    b: 1,
    c: () => { return 'c' },
    d: new Date(),
    e: { e1: { e3: 'ff' } },
    f: []
}
a.g = 'ddd'
console.log(getLast([1, 2, 3]))
console.log(a, deepClone(a))