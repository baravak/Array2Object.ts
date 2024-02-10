export function Array2Object (array: any[], key: string, value?: string): Record<string, any> {
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: value === undefined ? item : item.value
      }
    }, {})
  }