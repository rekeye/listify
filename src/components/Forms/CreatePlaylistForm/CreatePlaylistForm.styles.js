import styled from "styled-components";
import FormikField from "./FormikField";
import FormikRadio from "./FormikRadio";

export const Container = styled.section`
  margin: 2em 0;
`;
export const TextField = styled(FormikField)`
  width: 100%;
  padding: 0.75em;
  margin: 0.75em;
  font-size: 1.125rem;
  background: rgba(60, 60, 60, 0.2);
  border: none;
  color: white;
  border-bottom: 2px solid var(--base-dark-blue);
`;
export const ToggleBtn = styled.label`
  border: 3px solid var(--base-dark-blue);
  display: inline-block;
  padding: 0.5em;
  position: relative;
  text-align: center;
  transition: background 600ms ease, color 600ms ease;
`;
export const ToggleField = styled(FormikRadio)`
  display: none;
  & + label {
    cursor: pointer;
    &:hover {
      background: none;
      color: var(--base-dark-blue);
    }
    &:after {
      background: var(--base-dark);
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
      width: 100%;
      z-index: -1;
    }
  }
  &.public + label {
    border-right: 0;
    &:after {
      left: 100%;
    }
  }
  &.private + label {
    margin-left: -5px;
    &:after {
      left: -100%;
    }
  }
  &:checked + label {
    cursor: default;
    color: white;
    transition: color 200ms;
    &:after {
      left: 0;
    }
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Btn = styled.button`
  background: var(--base-dark-blue);
  border: 0;
  padding: 1em;
  margin: 1em;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
`;
