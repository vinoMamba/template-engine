import { FC, createContext, useState } from "react"

export interface AppContextProps {
  n: number
  setN: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext<AppContextProps | null>(null)

type Props = {
  children: React.ReactNode
}
export const AppContextProvider: FC<Props> = ({ children }) => {
  const [n, setN] = useState(1)
  const contextValue: AppContextProps = {
    n,
    setN
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}