import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { darkTheme } from "./theme";
import Nav from "./components/Nav";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <HelmetProvider>
          <Helmet>
            <title>Crypto Tracker</title>
          </Helmet>
          <GlobalStyle />
          <Nav themeHandler={setCurrentTheme} />
          <Outlet />
        </HelmetProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
