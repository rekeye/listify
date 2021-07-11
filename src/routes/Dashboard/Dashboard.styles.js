import styled from "styled-components";

export const LinkBtn = styled.div`
  background: var(--base-dark-blue);
  padding: 0.25em;
  margin: 0.5em 0;
  text-align: center;
  font-size: 1.3rem;
`;
export const PlaylistItems = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr;
  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1268px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const AboutYou = styled.figure`
  height: 8rem;
  display: flex;
  align-items: center;
  border: 4px solid var(--base-grey);
  p {
    margin-left: 2em;
    font-size: 1.25rem;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
