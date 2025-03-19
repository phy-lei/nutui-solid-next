import { createContext } from '@/hooks/create-context'

interface RowContextType {
  gutter?: number | string
}

export const [RowContextProvider, useRowContext, RowContext]
  = createContext<RowContextType>({
    name: 'RowContext',
    hookName: 'useRowContext',
    providerName: 'RowContextProvider',
  })
