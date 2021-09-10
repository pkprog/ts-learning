import {padStart} from "./test_string_utils";

export function print(text: string): void {
    const numStr = padStart((<string><unknown>(rowNumber++)), 5, ".");
    console.log(`${numStr}: ${text}`);
}

let rowNumber = 0;
