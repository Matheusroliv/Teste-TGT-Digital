import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #f1356d;
    }
  }

  div {
    width: 100px;
  }
`