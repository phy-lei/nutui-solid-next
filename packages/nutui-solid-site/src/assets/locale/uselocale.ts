import { createSignal, onMount, type Accessor, type Setter } from 'solid-js'
import config from '@/config/env'

export const getLocale = () => {
  let locale = 'zh-CN'
  try {
    const matched = window.parent.location.href.match(/#\/([a-z-]+)/i)
    if (matched) {
      ;[, locale] = matched
      if (config.locales.indexOf(locale) === -1) locale = 'zh-CN'
    }
  } catch (e) {
    console.log(e);
  }

  return locale
}

const useLocale = (): [Accessor<string>, Setter<string>] => {
  const [locale, setLocale] = createSignal<string>(getLocale())

  const handlePopState = () => {
    setLocale(getLocale())
  }

  onMount(() => {
    try {
      window.parent.addEventListener('popstate', handlePopState)
    } catch (e) {
      console.log(e);
    }
    return () => {
      try {
        window.parent.removeEventListener('popstate', handlePopState)
      } catch (e) {
        console.log(e);
      }
    }
  })

  return [locale, setLocale]
}

export default useLocale
