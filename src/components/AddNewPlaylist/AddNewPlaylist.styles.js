import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--base-grey);
  &:hover {
    background: var(--base-dark-blue);
  }
`;
