import { createContext } from '@/hooks/create-context'

interface DataContextType {
  gutter?: number | string
}

export const [DataContextProvider, useDataContext, DataContext]
  = createContext<DataContextType>({
    name: 'DataContext',
    hookName: 'useDataContext',
    providerName: 'DataContextProvider',
  })
