import { createContext } from "solid-js";

interface DataContextType {
  gutter?: number | string;
}

export const DataContext = createContext<DataContextType>({})
