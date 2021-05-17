import styled, { css } from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  margin-bottom: 2em;
  text-align: ${({ position }) => position};
  overflow: hidden;
`;

export const FlexColumn = styled.a`
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  transition: all 0.75s linear;
  ${({ inView }) =>
    inView
      ? css`
          opacity: 1;
          transform: translateX(0);
        `
      : css`
          opacity: 0;
          transform: translateX(
            ${({ position }) => (position === "left" ? "-100%" : "100%")}
          );
        `}
`;

export const Info = styled.div`
  width: auto;
  font-size: 1.2rem;
  p {
    margin: 0.5em;
  }
`;

export const Button = styled.div`
  background: var(--base-dark-blue);
  text-align: center;
  padding: 1em 0;
  margin-top: 0.5em;
  p {
    font-size: 1.6rem;
  }
`;
