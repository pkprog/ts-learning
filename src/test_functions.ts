function processValues(val1: string, val2: number = 1000): number {
    let cnt = 0;
    if (val1 != null) {
        cnt++;
    }
    if (val2 != null) {
        cnt++;
    }
    if (val2) {
        cnt++;
    }
    return cnt;
}

function sum(x: number, y: number): number {
    return x + y;
}

let sum2: (x: number, y: number) => number;
sum2 = sum;

function sum3(x: number, y: number, op: (a: number, b: number) => number): number {
    return op(x, y);
}

