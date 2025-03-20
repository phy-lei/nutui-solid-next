import { GridLocalProps } from './grid'
import { createContext } from '@/hooks/create-context'

type GridContextType = GridLocalProps

export const [GridContextProvider, useGridContext, GridContext]
  = createContext<GridContextType>({
    name: 'GridContext',
    hookName: 'useGridContext',
    providerName: 'GridContextProvider',
  })
