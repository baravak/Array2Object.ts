export function except<T extends any[] = never>(array: T, ..._except: T):T{
    return array.filter(a => !_except.includes(a)) as T
}
