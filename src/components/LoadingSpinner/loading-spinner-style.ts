import { styled } from "styled-components";

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  margin: 20px auto;
  border: 3px dotted #000;
  border-left: none;
  border-bottom: none;
  border-radius: 100px;
  animation: rotate 1.5s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
