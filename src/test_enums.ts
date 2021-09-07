enum Things {
    aTable, aPen, aLamp
}

function printThing(th: Things) {
    console.log(`Перечисление вещей: ${Things[th]}`);
}

printThing(Things.aPen);
