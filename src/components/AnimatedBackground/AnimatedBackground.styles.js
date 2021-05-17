import styled, { css } from "styled-components";
import { ReactComponent as FloatingSvg } from "../../assets/floating.svg";

const createCSS = (total) => {
  let styles = "";
  for (let i = 1; i <= total; i++) {
    styles += `
          &:nth-child(${i}) {
              left: ${Math.random() * (100 - 1) + 1 - 10}%;
              animation: raise-${i} ${6 + Math.random(15)}s linear infinite;
              animation-delay: ${Math.random() * (5 - 1) + 1 - 5}s;
              transform: scale(${0.3 * i - 0.6}) rotate(${
      Math.random() * (360 - 1) + 1
    }deg);
              z-index: ${i};
              filter: blur(${i - 6}px);
  
              @keyframes raise-${i} {
                  to {
                      bottom: 150vh;
                      transform: scale(${0.3 * i - 0.6}) rotate(${
      Math.random() * (360 - 1) + 1
    }deg);
                  }
              }
          }
      `;
  }

  return css`
    ${styles}
  `;
};

export const Container = styled.div`
  perspective-origin: 50% 50%;
`;
export const StyledFloatingSvg = styled(FloatingSvg)`
  stroke: var(--base-light-blue);
  position: absolute;
  bottom: -100vh;
  transform-style: preserve-3d;
  ${createCSS(8)}
`;
