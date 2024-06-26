export const isObject = (val: unknown): val is Record<string, unknown> =>
  val !== null && typeof val === 'object'

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isPromise = <T>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

