import HouseholdEquipment from "./test_m1";
import {print} from "./test_print_module";

export function runFromModule(): void {
    print("Домашнее оборудование:")
    let eq1 = new HouseholdEquipment(1, "HDD");
    print(eq1.toString());
    let eq2 = new HouseholdEquipment(3.5, "Notebook #1");
    print(eq2.toString());
    print("---------------------")
}
