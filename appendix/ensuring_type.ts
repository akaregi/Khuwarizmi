export function isString(obj: unknown): obj is string {
  return typeof obj === 'string'
}

export function isNumber(obj: unknown): obj is number {
  return typeof obj === 'number'
}

// ??????????
export function isTypeOf<T>(obj: unknown, type: T): obj is T {
  return typeof obj === typeof type
}
