// import { createStore } from 'solid-js/store'
import { createContext, withSignalProvider } from '@/hooks/create-context'

interface DataContextType {
  gutter?: number | string
}

export const [DataContextProvider, useDataContext, DataContext]
  = createContext<DataContextType>({
    name: 'DataContext',
    hookName: 'useDataContext',
    providerName: 'DataContextProvider',
  })

// const WithSignalDataContextProvider = withSignalProvider(_DataContextProvider)

// export const [DataContextProvider, useDataContext, DataContext] = [WithSignalDataContextProvider, _useDataContext, _DataContext]
