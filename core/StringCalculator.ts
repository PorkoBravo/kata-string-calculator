export function calculate(expression: string): number {
    if (isFalsy(expression)) {
        return 0;
    }

    const sum = separateElementsOf(expression).map(element => {
        return parseNumericValue(element);
    }).reduce(sumNumbers)
    return sum
}

function separateElementsOf(expression: string): string[] {
    const DEFAULT_SEPARATOR = ","
    const DELIMITER_CONFIGURATION_REGEXP: RegExp = /^\/\/([^\/\d]+)\//
    
    const delimiter = expression.match(DELIMITER_CONFIGURATION_REGEXP)?.[1]
    if(!!!delimiter) {
        return expression.split(DEFAULT_SEPARATOR)
    }

    return expression.replace(DELIMITER_CONFIGURATION_REGEXP,'').split(delimiter)
}

function isFalsy(expression: string): boolean {
    return !!!expression;
}

function parseNumericValue(element: any): number {
    const parsedNumber = parseInt(element)

    if(!!!parsedNumber) return 0
    return parsedNumber
}

function sumNumbers(a:number , b:number): number {
    return a + b 
}
