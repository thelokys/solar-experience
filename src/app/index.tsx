import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  );
}
