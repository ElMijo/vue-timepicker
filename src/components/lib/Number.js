class NumericKeyInterface {
    static keys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
}

export class Number {
    keyToNum(key)
    {
        const keyInt = parseInt(key);
        if (isNaN(keyInt)) throw new Error(`Invalid key number [${key}]`);
        return NumericKeyInterface.keys.indexOf(keyInt);
    }
}
