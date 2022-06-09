import { Edible } from "./edible";
export abstract class Animal{
    abstract makeSound():string;
}
export class Tiger extends Animal{
    makeSound(): string {
        return "gào";
    }
}
export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "cúc cu";
    }
    howToEat(): string {
        return "Could be fried";
    }
}