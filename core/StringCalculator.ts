export function calculate(expression: string): number {
    if(!!!expression) {
        return 0;
    }
    const numericExpresion: number = parseInt(expression)
    return numericExpresion;
}