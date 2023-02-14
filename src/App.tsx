import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>ola</h1>
    </ThemeProvider>
  )
}
