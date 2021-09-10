import styled from "styled-components"

export const CreateContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;

  label {
    text-align: left;
    display: block;
  }

  h3 {
    font-size: 26px;
    color: #f1356d;
    margin-top: 80px;
  }

  input, textarea, select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  button {
    margin-top: 16px;
    margin-bottom: 16px;
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`
export const PreviewTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 26px;
  font-weight: bold;
`
export const PreviewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
export const PreviewPost = styled.div`
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
export const PreviewContent = styled.div`
  max-width: 600px;
`