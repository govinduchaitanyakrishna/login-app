import styled from "styled-components";
import { Navbar } from "./component/navbar";
import { Playground } from "./component/playground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./component/signin";
import { SignUp } from "./component/signup";
import { PageNotFound } from "./component/page-not-found";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Playground>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </Playground>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
