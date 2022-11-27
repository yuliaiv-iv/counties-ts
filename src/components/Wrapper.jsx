import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 1023px) {
    padding: 0 40px;;
  }

  @media (min-width: 1438px) {
    padding: 0 80px;
  }
`;

