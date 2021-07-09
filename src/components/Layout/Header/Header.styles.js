import styled from "styled-components";

export const Container = styled.header`
  background: var(--base-grey);
  padding: 0 2em;
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10000;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: auto;
  }
`;
export const Hamburger = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 3rem;
    height: 0.375rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
export const Nav = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s linear;
  @media (min-width: 768px) {
    display: flex;
    transform: translateX(0);
    flex-direction: row;
    width: auto;
  }
`;
export const LinkBtn = styled.div`
  background: var(--base-dark-blue);
  padding: 0.3em 1em;
  margin: 0.5em;
  font-size: 1.4rem;
`;
