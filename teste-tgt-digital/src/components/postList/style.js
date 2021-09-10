import styled from "styled-components"

export const PostsContainer = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  }

  h3 {
    color: #f1356d;
  }

  p {
    color: #888;
  }
`
export const ContentContainer = styled.div`
  text-align: justify;
  max-width: 600px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 12px 12px;
  color: #888;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:hover {
      color: #CF4647;
    }
  }
`