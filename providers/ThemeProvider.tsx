import * as React from "react"

import { useLocalStorage } from "usehooks-ts"

interface Props {
  children: React.ReactNode
}

const ThemeContext = React.createContext<any>(null)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage<string>("theme", "light")

  const toggleMode = () => {
    const html = document.querySelector<HTMLHtmlElement>("html")!
    if (themeMode == "light") {
      html.classList.remove("dark")
    } else {
      html.classList.add("dark")
    }
  }

  const provider = {
    themeMode,
    onChangeThemeConfig: (mode?: string) => {
      if (mode === undefined) {
        setThemeMode(themeMode == "light" ? "dark" : "light")
        return
      }
      setThemeMode(mode)
    },
  }

  React.useEffect(() => {
    toggleMode()
  }, [themeMode])

  return <ThemeContext.Provider value={provider}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)
