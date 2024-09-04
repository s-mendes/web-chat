import styled from "styled-components";

export const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  & > .messages {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
    padding: 1rem;
    & > div {
      width: 100%;
      max-width: 15.625rem;
      font-size: 0.9375rem;
      font-weight: 400;
      padding: 0.625rem;
      margin-bottom: 1rem;
      line-height: 1.375rem;
      & > span {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 700;
      }
      &.incoming {
        background-color: #333333;
        color: #f2f2f2;
        border-radius: 0 0.5rem 0.5rem 0.5rem;
        align-self: flex-start;
      }
      &.outgoing {
        background-color: #f2f2f2;
        color: #121212;
        border-radius: 0.5rem 0.5rem 0 0.5rem;
        align-self: flex-end;
      }
    }
  }
  & > form {
    background-color: #191919;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    & > input {
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      flex: 1;
      outline: none;
      background-color: #212121;
      color: #f2f2f2;
      font-size: 1rem;
      &:focus {
        outline: 0.125rem solid #f2f2f2;
      }
    }
    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0.875rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      background-color: #121212;
      color: #f2f2f2;
      &:hover {
        background-color: #191919;
      }
    }
  }
`
