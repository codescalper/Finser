import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"


function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* This is used to provide a consistent styling accross different browser -> Does by resetting default CSS styles */}
      </ThemeProvider>
    </div>
  )
}

export default App
