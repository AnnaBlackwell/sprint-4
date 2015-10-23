import { range, reduce, reverse } from 'ramda'

var numbers = [7, 12, 4, 51, 23]

var add = function (x, y) {
  return x + y
}

var sum = reduce(add, 0, numbers)

var numbers2 = [14, 27, 34]

var subtract = function (a, b) {
  return a - b
}

var minus = reduce(subtract, 100, numbers2)

console.log('sum =', sum)

console.log('range =', range(5, 15).toString())

console.log('subtract =', minus)

console.log('reverse =', reverse(1, 2, 3, 4, 5).toString())
