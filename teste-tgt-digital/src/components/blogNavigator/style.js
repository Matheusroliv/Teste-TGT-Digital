import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  border-bottom: 1px solid #f2f2f2;

  h1 {
    color: #f1356d;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-size: larger;

  p {
    color: #888;
    cursor: pointer;

    &:hover {
      color: #f1356d;
    }
  }
`