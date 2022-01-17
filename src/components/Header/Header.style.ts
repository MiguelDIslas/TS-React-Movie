import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(27, 57, 106);
  background: linear-gradient(
    90deg,
    rgba(27, 57, 106, 1) 50%,
    rgba(0, 212, 255, 0.7038165608040091) 100%
  );
  /* background: var(--darkGrey); */
  padding: 0 20px;
`;

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and(max-width: 500px){
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px){
    width: 80px;
  }

`;
