import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
