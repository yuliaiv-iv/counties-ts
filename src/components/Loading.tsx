import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
        transform: rotate(360deg);
      }
`;

const Loader = styled.div`
  height: calc(100vh - 232px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #d1d2d6;
  border-bottom-color: #1a1b22;
  border-left-color: #1a1b22;
  border-radius: 50%;
  animation: ${spin} 0.75s infinite linear;
`;

function Loading() {
  return (
    <Loader>
      <Spinner></Spinner>
    </Loader>
  );
}

export default Loading;
