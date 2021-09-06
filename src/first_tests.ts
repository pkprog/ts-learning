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


