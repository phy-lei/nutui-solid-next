// import { createStore } from 'solid-js/store'
import { Accessor } from 'solid-js'
import { createContext, withSignalProvider } from '@/hooks/create-context'

interface DataContextType {
  store: Accessor<{
    gutter?: number | string
  }>
}

const [_DataContextProvider, _useDataContext, _DataContext]
  = createContext<DataContextType>({
    name: 'DataContext',
    hookName: 'useDataContext',
    providerName: 'DataContextProvider',
  })

const WithSignalDataContextProvider = withSignalProvider(_DataContextProvider)

export const [DataContextProvider, useDataContext, DataContext] = [WithSignalDataContextProvider, _useDataContext, _DataContext]
