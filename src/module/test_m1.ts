class HouseholdEquipment {
    private weight: number;
    private name: string;

    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public getName(): string {
        return this.name;
    }

    public toString(): string {
        return `Это ${this.name}, вес ${this.weight}`;
    }
}

export default HouseholdEquipment;
