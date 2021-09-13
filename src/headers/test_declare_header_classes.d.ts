declare class Router {
    antennaCount: number;
    rangeKm: number;
    name: string;

    constructor(antennaCount: number, rangeKm: number, name: string);
    display(): void;
}
