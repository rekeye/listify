import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  position: fixed;
  overflow: hidden;
`;
export const Content = styled.div`
  min-height: 100vh;
  padding: 1.4em;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 1em;
  }
`;
export const LoginBtn = styled.div`
  background: var(--base-dark-green);
  padding: 1em 1.5em;
  font-size: 1.5rem;
`;
