interface IListUnder {
    id: number,
    text: string
}

declare const messageTree: {
    root: string,
    listUnder: Array<IListUnder>,
    toString(): string
}

