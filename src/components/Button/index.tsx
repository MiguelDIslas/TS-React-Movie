import React from "react";
// Style
import { Wrapper } from "./Button.style";

type Props = {
  text: string;
  callback: ()=> void;
}

const Button: React.FC<Props> = ({ text, callback }) => (
  <Wrapper onClick={callback}>
    {text}
  </Wrapper>
);
export default Button;
