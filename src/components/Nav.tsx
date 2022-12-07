import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  button {
    padding: 0 5px;
    cursor: pointer;
    outline: inherit;
  }
`;

const NavBtns = styled.button`
  font-size: 36px;
`;
const BackBtn = styled(NavBtns)``;
const HomeBtn = styled(NavBtns)`
  float: right;
`;

function Nav() {
  const navigate = useNavigate();
  const onBackBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(-1);
  };
  return (
    <NavContainer>
      <BackBtn onClick={onBackBtnClick}>🔙</BackBtn>
      <HomeBtn>
        <Link to="/">🏠</Link>
      </HomeBtn>
    </NavContainer>
  );
}

export default Nav;
