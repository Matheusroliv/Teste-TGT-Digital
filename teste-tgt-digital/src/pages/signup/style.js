import styled from "styled-components"

export const SignupPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  div {
    margin-top: 18px;
  }

  h1 {
    color: #f1356d;
  }
`
export const BackButtonContainer = styled.div`
  position: absolute;
  left: 422px;
  top: 302px;
  font-size: 18px;
  
  p {
    color: #c4c4c4;
    cursor: pointer;

    &:hover {
      color: #f1356d;
    }
  }
`
export const CreateAccountButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      color: #f1356d;
    }
  }
`