export function Array2Object (array: any[], key: string): Record<string, any> {
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item
      }
    }, {})
  }