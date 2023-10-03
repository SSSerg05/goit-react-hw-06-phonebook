import styled from "@emotion/styled";

export const Name = styled.p`
  min-width: 250px;
  margin: 0;
  padding: 4px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;

  &:hover {
    color: white;
    background-color: #f44336;
  }

  &:active {
    color: white;
    background-color: red;
  }
`