const TEST_EXT_MESSAGE  = "Пробное подключение через заголовочный файл";

function transformExtMessageText(index) {
    return TEST_EXT_MESSAGE + ". Это новое сообщение. Тестовый индекс: " + index;
}

const messageTree = {
    root: "Корневое сообщение",
    listUnder: [
        {id: 1, text: "Текст 1"},
        {id: 2, text: "Текст 2"}
    ],
    toString: function() {
        let result = "";
        result += "Печатный текст из внешнего объекта:" + this.root + ", [" + this.listUnder[0].id + ", " + this.listUnder[0].text + "]";
        return result;
    }
};

class Router {
    constructor(antennaCount, rangeKm, name) {
        this.antennaCount = antennaCount;
        this.rangeKm = rangeKm;
        this.name = name;
    }

    // antennaCount: 15,
    // rangeKm: 0.12,
    // name: "Zyxel"
    display() {
        console.log(`Это роутер ${this.name}, дальность(км) ${this.rangeKm}, число антенн ${this.antennaCount}`);
    }
};

