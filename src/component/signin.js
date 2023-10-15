import React from "react";
import {
  LoginContainer,
  ContentWrapper,
  HeaderSpan,
  InputText,
  LoginButton,
} from "./common";
import axios from "axios";

export const LogIn = function () {
  const [message,setMessage] = React.useState("");
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const authenticateUser = async function () {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const resp = await axios.post(
      "http://localhost:5000/authenticateUser",
      {
        username,
        password,
      },
      {
        headres: {
          "content-type": "application/json",
        },
      }
    );
    if (resp.data && resp.data.isAuthenticated) {
      setMessage('You have logged in');
    }else{
      setMessage(resp.data.message)
    }
  };

  return (
    <LoginContainer>
      <ContentWrapper>
        <HeaderSpan>Login</HeaderSpan>
        <div>{message}</div>
        <InputText ref={usernameRef} type="text" placeholder="USERNAME" />
        <InputText ref={passwordRef} type="password" placeholder="PASSWORD" />
        <LoginButton onClick={authenticateUser}>Login</LoginButton>
      </ContentWrapper>
    </LoginContainer>
  );
};
