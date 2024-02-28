export function except<T>(array: T[], ..._except: T[]):T[]{
    return array.filter(a => !_except.includes(a))
}