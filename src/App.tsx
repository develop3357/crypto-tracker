import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Helmet, HelmetProvider } from "react-helmet-async";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Crypto Tracker</title>
        </Helmet>
        <GlobalStyle />
        <Outlet />
      </HelmetProvider>
    </div>
  );
}

export default App;
