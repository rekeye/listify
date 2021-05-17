import styled from "styled-components";

export const Container = styled.figure`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--base-grey);
  text-align: center;
`;
export const Button = styled.div`
  background: var(--base-dark-blue);
  text-align: center;
  padding: 1em 0;
  margin-top: 0.5em;
  p {
    font-size: 1.2rem;
  }
`;
