import React from "react";
import {
  LoginContainer,
  ContentWrapper,
  HeaderSpan,
  InputText,
  LoginButton,
  PasswordWrapper,
  LockIcon,
} from "./common";
import {Lock, Unlock} from "react-feather"

export const SignUp = function () {
  const [type,setType]=React.useState('text')
  const onlyAlphabets = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[a-z A-Z\b]+$/);
    if (!regex.test(char)) evt.preventDefault();
  };

  const onlyNumber = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[0-9]+$/);
    if (!regex.test(char)) evt.preventDefault();
  };

  const toggleVisibilityPassword = function(){
    if(type === "text") setType("password");
    else setType('text')
  }

  return (
    <LoginContainer>
      <ContentWrapper>
        <HeaderSpan>Register</HeaderSpan>
        <InputText
          type="text"
          placeholder="full name"
          onKeyDown={onlyAlphabets}
        />
        <InputText
          type="text"
          placeholder="phone number"
          onKeyDown={onlyNumber}
        />
        <InputText type="text" placeholder="username" />
        <PasswordWrapper>
          <InputText type={type} placeholder="password" />
          <LockIcon onClick={toggleVisibilityPassword} type={type}>
            {type !== "text" ? <Lock/> :<Unlock/>}
          </LockIcon>
        </PasswordWrapper>
        <LoginButton>Register</LoginButton>
      </ContentWrapper>
    </LoginContainer>
  );
};
