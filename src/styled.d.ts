import "styled-components";

//css의 type을 설정
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    titColor: string;
    accentColor: string;
    tabBg: string;
    boxColor: string;
  }
}
