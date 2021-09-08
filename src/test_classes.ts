class UserTest {
    readonly name: string;
    age: number = 15;

    constructor(name: string, age?: number) {
        this.name = name;
        if (age != undefined) {
            this.age = age;
        }
    }

    toString(index: number): string {
        return `Имя тестового пользователя ${index} ${this.name}, а возраст ${this.age}. Спасибо за внимание`;
    }
}

let anechka: UserTest = new UserTest("Аня");
let lizochka = new UserTest("Лиза");

console.log(anechka.toString(100));
console.log(lizochka.toString(200));


class Housewife extends UserTest {
    homework: boolean;
    doHomework(): void {
        console.log(`Работа по дому. Работает ${this.name}`);
    }

    constructor(name: string, age: number, homework: boolean) {
        console.log("Конструктор наследника");
        super(name, age);
        this.homework = homework;
    }

    toString(index: number): string {
        let str = super.toString(index);
        return str + `: ${456}`;
    }
}

let p: Housewife = new Housewife("П", 28, true);
p.doHomework();
console.log(p.toString(300));

let testUser: UserTest;
testUser = p;


abstract class Figure {
    protected abstract readonly cornerCount: number;
    protected abstract figureName: string;
    abstract printArea(): void;
    protected toString(): void {
        console.log("Печать: Абстрактная фигура. Имя=" + this.figureName);
    };
}

class Triangle extends Figure {
    public static /*readonly*/ corners: number = 3;
    protected figureName: string;

    //Это только для target=es5, а у меня установлен параметр es3
    /*public set mark(value: string): void {
        this._mark = value;
    }
    public get mark(): string {
        return this._mark;
    }*/

    constructor(protected readonly cornerCount: number, name: string, private _mark: string) {
        super();
        this.figureName = name;
    }

    printArea() {
        console.log(`Треугольник. Углов: ${this.cornerCount}`)
    }

    public toString() {
        super.toString();
        console.log("Печать: Треугольник. Маркировка:" + this._mark);
    }
}

Triangle.corners = 15;
const tr1: Triangle = new Triangle(Triangle.corners, "Треуг", "yes");
tr1.printArea()
tr1.toString();
