import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content } from "./BreadCrumb.style";

type Props = {
  movieTitle: string;
};


const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
