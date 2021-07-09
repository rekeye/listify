import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5em;
  :hover {
    background: var(--base-grey);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  margin-right: 2em;
  width: 30%;
  @media (min-width: 768px) {
    width: auto;
  }
`;
export const LinkBtn = styled.div`
  background: var(--base-dark-blue);
  margin-right: 1em;
  padding: 0.5em;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
