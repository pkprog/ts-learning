class User {
    name: string;
    constructor(_name:string) {
        this.name = _name;
    }

}

const anna : User = new User("Аня");
console.log("Привет, ", anna.name);

let testString : number = 1;
console.log("Тествая строка = ", testString);

class ClassForFormattedOuputTest {
    testString1: string = "TEST";
    testNum1: number = 123;
    testBool: boolean = true
}

const tfo : ClassForFormattedOuputTest = new ClassForFormattedOuputTest();
let resultString1 : string = `Проба форматирования текста: строка ${tfo.testString1}, число ${tfo.testNum1}, булеан ${tfo.testBool}`;
console.log(resultString1);


let person: {name: string, age?: number} = {name: "Аня2", age: 18};
console.log(`Тест объекта без класса: имя ${person.name} возраст ${person.age}`);

person = {name: "Лиза"};
const AGE_FIELD_NAME = "age";
if (AGE_FIELD_NAME in person) {
    console.log(`Тест объекта без класса: имя ${person.name} возраст ${person.age}`);
} else {
    console.log(`Тест объекта без класса: имя ${person.name} возраст НЕ указан`);
}

type Food = {name: string, weight: number, calories: number};
type FoodGrass = Food & {height: number};

function printFoodParameters({name, weight, calories}: Food): FoodGrass {
    const div1 = <HTMLElement>document.getElementById("Header");
    div1.innerHTML = `Название: ${name}, вес ${weight}, калорий ${calories}`;

    const div2 = document.getElementById("Label") as HTMLElement;
    div2.innerHTML = `Высота: 100`;

    return {
        name: name, weight: weight, calories: calories,
        height: 100
    }
}

function printTableParameters(name: string, weightUnit?: string, ...dimensions: number[]) {
    console.log(`Стол: ${name}, единица веса ${weightUnit}, измерения ${dimensions}`);
}

function printMonitorParameters(name: string, diagonal: number) {
    console.log(`Монитор: ${name}, диагональ ${diagonal}`);
}

function sumsum(num1: number, num2: number) {
    console.log(`Сумма: ${num1} + ${num2}`);
}