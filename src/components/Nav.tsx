import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { ThemeContext, useTheme } from "styled-components";

const NavContainer = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  height: 40px;
  margin: 0 auto;
`;

const NavBtn = styled.button<{ right?: boolean }>`
  font-size: 24px;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;
  outline: inherit;
  float: ${(props) => (props.right ? "right" : "left")};
`;

const theme = "dark";

function Nav() {
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);
  const ut = useTheme();
  const [darkMode, setDarkMode] = useState(true);
  // themeContext.bgColor = "white";
  const onBackBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  const toggleThemeBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // themeContext.bgColor = "white";
    // themeContext.textColor = "red";
    // setDarkMode((darkMode) => !darkMode);
    console.log(themeContext);
    console.log(ut);
  };
  return (
    <NavContainer>
      <NavBtn onClick={onBackBtnClick}>🔙</NavBtn>
      <NavBtn right>
        <Link to="/">🏠</Link>
      </NavBtn>
      <NavBtn right onClick={toggleThemeBtnClick}>
        {theme === "dark" ? "☼" : "☾"}
      </NavBtn>
    </NavContainer>
  );
}

export default Nav;
