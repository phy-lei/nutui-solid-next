import { isObject } from './is'
import { type JSX } from 'solid-js'

export function toObjectStyle(style: string | JSX.CSSProperties) {
  if (isObject(style)) {
    return style
  }
  return style
    .split(';')
    .filter(Boolean) // 去除空字符串
    .reduce((obj: Record<string, string>, pair) => {
      const [key, value] = pair.split(':')
      obj[key.trim()] = value.trim() // 去除两侧空白并存储
      return obj
    }, {})
}
