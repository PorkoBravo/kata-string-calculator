export function calculate(expression: string): number {
    if (isFalsy(expression)) {
        return 0;
    }

    const sum = separateElementsOf(expression).map(element => {
        return parseInt(element);
    }).reduce((a, b) => a + b)
    return sum
}

function separateElementsOf(expression: string): string[] {
    const SEPARATOR = ","
    return expression.split(SEPARATOR)
}

function isFalsy(expression: string): boolean {
    return !!!expression;
}

