import styled, { keyframes } from "styled-components";

const dot = keyframes`
    50% {
        transform: translateX(96px);
    }
`;
const dots = keyframes`
    50% {
        transform: translateX(-31px);
    }
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
`;
export const Dot = styled.span`
  position: absolute;
  top: 12px;
  left: 15px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--base-dark-blue);
  transform: translateX(0);
  animation: ${dot} 2.8s infinite;
`;
export const Dots = styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: ${dots} 2.8s infinite;
  span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 16px;
    background: var(--base-dark-blue);
  }
`;
