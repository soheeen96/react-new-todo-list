import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme"; //사용하고 싶은 테마 불러오기

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
//RecoilRoot : 리코일 state를 사용하는 컴포넌트들은 <RecoilRoot>를 필요로 한다.
//ThemeProvider : 내부에 있는 컴포넌트는 theme.ts의 영향을 받아 props에서 css를 가져올 수 있습니다.
//ThemeProvider를 상위컴포넌트로 감싸주기
