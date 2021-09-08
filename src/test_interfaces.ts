interface IFruit {
    weight: number;
    readonly color: string;
    toGrow(): void;
    printCurrentWeight(): void;
}

let apple1: IFruit = {weight: 0.01, color: "red", toGrow() {this.weight += 1;}, printCurrentWeight() {}};

//apple1.color = "black";

class Fruit implements IFruit {
    readonly color: string;
    weight: number;

    constructor(color: string, weight: number) {
        this.color = color;
        this.weight = weight;
    }

    printCurrentWeight(): void {
        console.log(`Текущий цвет ${this.color}, вес ${this.weight}`);
    }

    toGrow(): void {
        this.weight += 2.3456;
    }
}

let apple2: IFruit = new Fruit("yellow", 1.1);
apple2.printCurrentWeight();
apple2.toGrow();
apple2.printCurrentWeight();
apple2.toGrow();
apple2.printCurrentWeight();
apple2.toGrow();

interface IYellowFruit extends IFruit {
    toGetYellow(): void;
}

class YellowFruit implements IYellowFruit {
    readonly color: string;
    readonly weight: number;

    constructor(color: string, weight: number) {
        this.color = color;
        this.weight = weight;
    }

    printCurrentWeight(): void {
    }

    toGetYellow(): void {
    }

    toGrow(): void {
    }
}

//Интерфейсы функций
interface IFStringConcatenator {
    (string1: string, number1: number): string;
}

let logStringConcat: IFStringConcatenator = function(string1: string, number1: number): string {
    console.log("Конкатенация начата...");
    return `Результат конкатенации: ${string1}+${number1}`;
}
let concFunction = logStringConcat("test", 1234);
console.log(concFunction);

//Интерфейсы массивов
interface IAFruits {
    [value: number]: IFruit
}

const testIterfaceArray1: IAFruits = [new YellowFruit("черный", 0.15), new Fruit("white", 1.5)];

//Гибридный интерфейс
interface IHybridTest {
    (text: string, count: number): string;
    printString(text: string): void;
    nameTestHybrid: string;
}

const testHybridImpl: IHybridTest = <IHybridTest>function(text: string, count: number): string {
    return "sdf";
}
testHybridImpl.printString = function(text: string) {
    console.log(`Гибридное имя: ${testHybridImpl.nameTestHybrid}`);
}
testHybridImpl.nameTestHybrid = "nameTestHybrid1";

testHybridImpl.printString("123");

