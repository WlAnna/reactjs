import { choice, remove } from './helpers'
import fruits from './foods'

let fruit = choice(fruits);
let index = fruits.indexOf(fruit)
console.log(`I would like random ${fruit}`)
console.log(`I would like random ${fruits.splice(index, 1)}`)
console.log(`Fruits left ${fruits.length}`)
console.log(fruits)