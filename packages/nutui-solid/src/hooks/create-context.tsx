import {
  createSignal,
  createContext as createSolidContext,
  useContext as useSolidContext,
} from 'solid-js'
import { effect } from 'solid-js/web'
import { type Context, type ContextProviderComponent } from 'solid-js'
import { isObject } from '@/utils/is'

export interface CreateContextOptions<T> {
  hookName?: string
  providerName?: string
  errorMessage?: string
  name?: string
  defaultValue?: T
}

export type CreateContextReturn<T> = [
  ContextProviderComponent<T>,
  () => T,
  Context<T>,
]

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
    defaultValue,
  } = options

  const Context = createSolidContext<T | undefined>(defaultValue)

  function useContext() {
    const context = useSolidContext(Context)

    if (!context) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName),
      )
      error.name = 'ContextError'
      Error.captureStackTrace?.(error, useContext)
      throw error
    }

    return context
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>
}

/**
 * 响应式Provider 支持value的类型为 Accessor
 * @param {any} Provider:Context<any>['Provider']
 * @returns {any}
 */
export function withSignalProvider(Provider: Context<any>['Provider']) {
  return (props) => {
    const [state, setState] = createSignal(props)

    effect(() => {
      if (props && isObject(props)) {
        for (const key in props) {
          if (key !== 'children') {
            if (props[key] !== state()[key]) {
              setState({ ...state(), key: props[key] })
            }
          }
        }
      }
    })

    return (
      <Provider value={{ store: state }}>
        {props.children}
      </Provider>
    )
  }
}
