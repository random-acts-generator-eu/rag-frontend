import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 0.5rem 1rem;
  box-shadow: 2px 2px 2px 1px;
  width: 200px;
  margin: 1rem;

  p {
    padding: 0.5rem 0;
  }
  strong {
    font-weight: bold;
  }
`;

export const Form = styled.form`
  background-color: white;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  margin: 0 auto;
  align-items: center;
  h2 {
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    section {
      display: flex;
      margin-top: 0.5rem;
      input {
        padding: 0;
        margin: 0;
      }
      label {
        margin-right: 1rem;
        padding: 0 0.3rem;
      }
    }
  }

  button {
    width: 50%;
    padding: 1rem;
    color: white;
    background-color: blue;
    margin-left: 1rem;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 10px;
    cursor: pointer;
  }
`;
