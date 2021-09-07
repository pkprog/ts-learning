const stringArray: string[] = ["1", "2", "three"];
console.log("Массив1:", stringArray);

const numberArray: Array<number> = [1, 2, 4,5,6];
console.log("Массив2:", numberArray);

const [firstElement, ...other]: number[] = numberArray;
console.log("Первый элемент из массива 2.1:", firstElement);

const [firstElement2,]: number[] = numberArray;
console.log("Первый элемент из массива 2.2:", firstElement2);

//Кортежи
type TComputers = [string, number];
let comp1:TComputers = ["декстопы", 100];
comp1 = ["ноутбуки", 200];

type THeadphones = readonly [string, number?, string?, ...number[]];
const headf1: THeadphones = ["JBL", 1, "2",3,4,5,6,7];
//headf1[15] = "Sony";
console.log("Кортеж2:", headf1);

//Внимание, это недоработка компилятора TS
type TAutomobiles = [string, number, ...number[], string, number];
const autos1: TAutomobiles = ["Жигули", 1,3,4,5,6,7, "Это машина", 1];
autos1[15] = "Sony"; //!
console.log("Кортеж3:", autos1);



