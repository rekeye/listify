import styled from "styled-components";
import FormikCheckbox from "./FormikCheckbox";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 50%;
  padding: 1em;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
  &:hover {
    background: var(--base-grey);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const Image = styled.img`
  margin-right: 0.5em;
  width: 25%;
  @media (min-width: 768px) {
    margin-right: 2em;
    width: auto;
  }
`;

//snached from https://codepen.io/aaroniker/pen/abzgWEx
export const Checkbox = styled(FormikCheckbox)`
  --primary: var(--base-light-blue);
  --secondary: white;
  --duration: 0.5s;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 240px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: 4px solid var(--primary);
  background-size: 300% 300%;
  transition: transform 0.3s;
  transform: scale(var(--scale, 1)) translateZ(0);
  animation: var(--name, unchecked) var(--duration) ease forwards;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: var(--height, 16px);
    left: 6px;
    top: var(--top, 6px);
    background: var(--background, var(--primary));
    animation: var(--name-icon-b, var(--name-icon, unchecked-icon))
      var(--duration) ease forwards;
  }
  &:before {
    clip-path: polygon(
      0 6px,
      6px 6px,
      6px 0,
      10px 0,
      10px 6px,
      16px 6px,
      16px 10px,
      10px 10px,
      10px 16px,
      6px 16px,
      6px 10px,
      0 10px
    );
  }
  &:after {
    --height: 4px;
    --top: 12px;
    --background: var(--secondary);
    --name-icon-b: var(--name-icon-a, checked-icon);
  }
  &:active {
    --scale: 0.95;
  }
  &:checked {
    --name: checked;
    --name-icon-b: checked-icon;
    --name-icon-a: unchecked-icon;
  }

  @keyframes checked-icon {
    from {
      transform: translateZ(12px);
    }
    to {
      transform: translateX(16px) rotateY(90deg) translateZ(12px);
    }
  }

  @keyframes unchecked-icon {
    from {
      transform: translateX(-16px) rotateY(-90deg) translateZ(12px);
    }
    to {
      transform: translateZ(12px);
    }
  }

  @keyframes checked {
    from {
      background-image: radial-gradient(
        ellipse at center,
        var(--primary) 0%,
        var(--primary) 25%,
        var(--secondary) 25.1%,
        var(--secondary) 100%
      );
      background-position: 100% 50%;
    }
    to {
      background-image: radial-gradient(
        ellipse at center,
        var(--primary) 0%,
        var(--primary) 25%,
        var(--secondary) 25.1%,
        var(--secondary) 100%
      );
      background-position: 50% 50%;
    }
  }

  @keyframes unchecked {
    from {
      background-image: radial-gradient(
        ellipse at center,
        var(--secondary) 0%,
        var(--secondary) 25%,
        var(--primary) 25.1%,
        var(--primary) 100%
      );
      background-position: 100% 50%;
    }
    to {
      background-image: radial-gradient(
        ellipse at center,
        var(--secondary) 0%,
        var(--secondary) 25%,
        var(--primary) 25.1%,
        var(--primary) 100%
      );
      background-position: 50% 50%;
    }
  }
`;
export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
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
