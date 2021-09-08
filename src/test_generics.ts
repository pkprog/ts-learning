function printName<T>(value: T, index: number): T {
    if (typeof value === "string") {
        console.log(`Generics test ${index}: ${<string>value}`);
    } else {
        console.log(`Generics test ${index}: НЕ СТРОКА`);
    }
    return value;
}

printName(printName(printName("Завтрак", 1), 2), 3);
printName(printName(printName({name: "1", value: "1"}, 1), 2), 3);
printName<IFruit>(new Fruit("orange", 2.2), 15);

function joinValues<T>(values: Array<T>): string {
    return values.join(", ");
}
console.log(joinValues<number>([1,2,3,4,5]));

function printCount<T extends {count: number}>(obj1: T, obj2: T): void {
    console.log(`Обобщения с ограничениями: ${obj1.count} ${obj2.count}`);
}
printCount({name: "1", count: 2}, {name: 2, count: 2});
