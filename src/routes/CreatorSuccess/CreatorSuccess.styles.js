import styled from "styled-components";

export const Gradient = styled.div`
  position: relative;
  background: linear-gradient(var(--base-dark-blue), var(--base-dark));
  opacity: 0.6;
  height: 25em;
  width: calc(100%+5vw);
  margin: 0 -5vw;
  z-index: -100;
  @media (min-width: 1468px) {
    width: calc(100%+15vw);
    margin: -2em -15vw;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -25em;
  @media (min-width: 468px) {
    margin-top: -20em;
  }
`;

export const Image = styled.img`
  height: 25em;
`;

export const Description = styled.p`
  margin: 0.5em 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinkBtn = styled.div`
  background: var(--base-dark-blue);
  padding: 0.3em 1em;
  margin: 0.5em;
  font-size: 1.4rem;
`;
