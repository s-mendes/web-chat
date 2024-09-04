import styled from "styled-components";

export const LoginBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100dvh;
& > div {
  width: 100%;
  max-width: 20rem;
  background-color: #212121;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #f2f2f2;
  & > h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
  }
  & > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > input {
      padding: 1rem;
      border-radius: 0.25rem;
      border: none;
      font-size: 0.875rem;
      font-weight: 600;
      background-color: #121212;
      color: #f2f2f2;
      outline: none;
      &:focus {
        outline: 0.125rem solid #f2f2f2;
      }
    }
    & > button {
      border: none; 
      padding: 1rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;
      background-color: #dddddd;
      color: #121212;
      &:hover {
        background-color: #ffffff;
      }
    }
  }
}

`