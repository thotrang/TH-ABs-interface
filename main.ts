import { Tiger } from "./animal";
import { Chicken } from "./animal";
import { Apple, Banana } from "./fruit";
console.log('---Animals-----')
let animals = []

animals.push(new Tiger());
animals.push( new Chicken());

for(let i=0;i<animals.length;i++){
    console.log(animals[i].makeSound());
    if (animals[i] instanceof Chicken) {
        console.log((animals[i] as Chicken).howToEat())
    }  
}

console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Banana();

fruits.forEach(item => {
    console.log(item.howToEat())
})