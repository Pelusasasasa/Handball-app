import { CssBaseline, ThemeProvider } from "@mui/material"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ( {children} ) => {
  console.log("a")
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>

  )
}
