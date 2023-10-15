import { styled } from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);
`;

export const InputText = styled.input`
  flex: 1;
  margin: 5px 20px 20px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;
export const LoginButton = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 20px;
  cursor: pointer;
  padding: 10px 6px;
  border-radius: 100px;
  background: #4331ed;
  &:hover {
    background: #2d1bdb;
    box-shadow: 0px 1px 4px 1px rgb(0 0 0/10%), 0px 1px 4px -1px rgb(0 0 0 /10%),
      0px 1px 7px 1px rgb(0 0 0 /10%);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

export const HeaderSpan = styled.span`
  color: gray;
  font-size: 24px;
  padding-left: 24px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LockIcon = styled.span`
  position: absolute;
  cursor: pointer;
  right: 30px;
  bottom: 24px;
  & > svg {
    width: 16px;
    height: 16px;
  }
`;
