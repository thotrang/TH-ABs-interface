export abstract class Fruit{
    abstract howToEat():string;
}
export class Apple extends Fruit{
    howToEat(): string {
        return "Apple could be slided";
    }
}
export class Banana extends Fruit{
    howToEat(): string {
        return "Banana could be eat";
    }
}