import { range, reduce, reverse, subtract, sortBy } from 'ramda'

var numbers = [7, 12, 4, 51, 23]

var add = function (x, y) {
  return x + y
}

var sum = reduce(add, 0, numbers)

/* var subtract = function (a, b) {
  return a - b
}

var minus = reduce(subtract, a, b) */

console.log('sum =', sum)

console.log('range =', range(5, 15).toString())

/* console.log('subtract =' minus(8, 3)) */
