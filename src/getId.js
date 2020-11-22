import { randomNumber } from './math.js'

export const getNumericId = (() => {
    let lastId = Date.now()
    return () => ++lastId
})()

export const getIdFrom0 = (() => {
    let lastId = 0
    return (length = 12) => `${++lastId}`.padStart(length, '0')
})()

export const getAlphaNumericId = (() => {
    const heyStack = '0123456789abcdefghijklmnopqrstuvwxyz'
    const randomChar = () => heyStack[randomNumber(heyStack.length)]
    return (length = 24) => Array.from({ length }, randomChar).join('')
})()
