export function calculate(expression: string): number {
    if(!!!expression) {
        return 0;
    }

    const sum = expression.split(",").map( element => {
        return parseInt(element);
    }).reduce((a,b) => a+b)

    return sum
}
