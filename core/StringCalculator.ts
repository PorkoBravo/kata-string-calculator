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
    const INITIAL_DELIMITER_CONFIGURATION = "//"

    if(expression.startsWith(INITIAL_DELIMITER_CONFIGURATION)) {
        return expression.split(expression.charAt(2).toString())
    } else {
        return expression.split(DEFAULT_SEPARATOR)
    }
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
