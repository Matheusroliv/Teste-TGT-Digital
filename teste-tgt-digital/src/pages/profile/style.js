import styled from "styled-components"

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;

  h1 {
    color: #111625;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: larger;

  p {
    color: #c4c4c4;
    cursor: pointer;

    &:hover {
      color: #f1356d;
    }
  }
`