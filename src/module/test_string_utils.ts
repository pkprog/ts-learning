function padStart(text: string | undefined, targetLength: number, padSymbol: string): string {
    if (padSymbol.length != 1) {
        throw Error("padSymbol <> 1");
    }

    let tempText = text ? text : "";
    for (let i = 0; i < targetLength && tempText.length < targetLength; i++) {
        tempText += padSymbol;
    }
    return tempText;
}

export {padStart};
