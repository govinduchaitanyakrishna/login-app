import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const NavbarContainer = styled.div`
  height: 40px;
  display: flex;
  background: #fff;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

const SignInContainer = styled.div``;
const Button = styled.button`
  color: #fff;
  padding: 4px 6px;
  background: #4331ed;
  outline: none;
  border-radius: 4px;
  padding: 4px 6px;
  border: none;
  margin: 2px 12px;
  ${(props) =>
    props.outline &&
    css`
      background: #fff;
      color: #4331ed;
      border: solid 1px #4331ed;
    `}
`;

export const Navbar = function (props) {
  const loc = useLocation();
  const nav = useNavigate();
  return (
    <NavbarContainer>
      <LogoContainer>
        <h6>splash.io</h6>
      </LogoContainer>
      <SignInContainer>
        {loc.pathname === "/login" ? (
          <Button
            outline="true"
            onClick={() => {
              nav("/signup");
            }}
          >
            Register
          </Button>
        ) : (
          <Button
            onClick={() => {
              nav("/login");
            }}
          >
            Login
          </Button>
        )}
      </SignInContainer>
    </NavbarContainer>
  );
};
