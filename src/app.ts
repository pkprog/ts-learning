import {runFromModule} from "./module/test_main";

console.log("Проверка функции:", processValues("q", 2));
console.log("Проверка функции:", processValues("q"));
console.log("Проверка функции:", processValues("q", 0));
//console.log("Проверка функции:", processValues("q", null));

console.log("Проверка функции2:", sum(1, 2));
//console.log("Проверка функции2:", sum2(1, 2));
console.log("Проверка функции2:", sum3(100, 200, sum));
//console.log("Проверка функции2:", sum4(15, 30));

printFoodParameters({name: "Пальма", weight: 100, calories: 1200});
printTableParameters("Стол дубовый", "кг", 1,2,3,4,5,6,7);
printTableParameters("Стол еловый");
const dims: number[] = [6,7,8];
printTableParameters("Стол берёзовый", "тн", ...dims);

const mon1: [string, number] = ["ViewSonic", 23];
printMonitorParameters(...mon1);

const numsForSumSum = [21, 23] as const; //Без const не проходит. Но ошибк другая
sumsum(...numsForSumSum);

import hello from "./test_module";
import HouseholdEquipment from "./module/test_m1";
hello();

runFromModule();

console.log(`Вывод сообщений, полученного через заголовочный файл. ТЕКСТ ${TEST_EXT_MESSAGE}`);
console.log(`Вывод сообщений, полученного через заголовочный файл ФУНКЦИЯ ${transformExtMessageText(1)}`);
console.log(`Вывод сообщений, полученного через заголовочный файл ОБЪЕКТ ${messageTree.toString()}`);
const routerFromExternalClass = new Router(15, 0.12, "Zyxel");
routerFromExternalClass.display();

$("#testBtn").on("click", function() {
    const he: HouseholdEquipment = new HouseholdEquipment(15, "Домашнее оборудование 1");
    console.log(`Сообщение по нажатию кнопки по событие через JQuery: ${he.toString()}`);
});
