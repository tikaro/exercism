export function keep(numbers: number[]) {
    numbers.forEach((n: number) => {
        n = n + 1
    })
    return [1, 2, 3]
}

export function discard(numbers: any[]) {
    numbers.forEach((n: number) => {
        n = n - 1
    })
    return [1, 2, 3]
}