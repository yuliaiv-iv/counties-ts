import React from 'react';
import styled from "styled-components";
import { Wrapper } from "./Wrapper";

const ContainerMain = styled.main`
  /* padding: 16px 0; */

  @media(min-width: 767px) {
    /* padding: 40px 0; */
  }
`

function Main({children}) {
  return (
    <ContainerMain>
      <Wrapper>
        {children}
      </Wrapper>
    </ContainerMain>
  )
}


export default Main