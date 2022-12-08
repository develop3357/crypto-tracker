import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

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

interface INav {
  themeHandler: Function;
}

function Nav({ themeHandler: setTheme }: INav) {
  const theme = useTheme();
  const [isDarkTheme, setDarkTheme] = useState(true);
  const navigate = useNavigate();
  const onBackBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  const toggleThemeBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTheme(isDarkTheme ? lightTheme : darkTheme);
    setDarkTheme((isDarkTheme) => !isDarkTheme);
  };
  return (
    <NavContainer>
      <NavBtn onClick={onBackBtnClick}>🔙</NavBtn>
      <NavBtn right>
        <Link to="/">🏠</Link>
      </NavBtn>
      <NavBtn right onClick={toggleThemeBtnClick}>
        {isDarkTheme ? "☼" : "☾"}
      </NavBtn>
    </NavContainer>
  );
}

export default Nav;
