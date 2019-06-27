import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
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
  width: 50%;
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

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const TableDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  height: 456px;
  justify-content: center;
  margin-top: 1%;
  @media (max-width: 850px) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;
export const ServiceForm = styled.form`
  width: 400px;
  border: 1px solid #9984a9;
  padding: 20px;
  color: #2e004e;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px 0 #9984a9, inset -2px -2px 6px 0px #a18db0;

  h2 {
    text-transform: capitalize;
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 25px;
  }

  label[for='description'] {
    display: block;
  }
`;

export const InputDiv = styled.div`
  padding-top: 11%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  label {
    display: block;
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  textarea {
    width: 80%;
    margin: 0 auto;
  }
`;

export const RadioInput = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  label {
    padding-bottom: 10px;
  }
  section {
    display: flex;
    justify-content: space-around;
  }
`;

export const BtnContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 5px;

  .contact-btn {
    width: 100%;
    height: 45px;
    text-transform: uppercase;
    font-family: 'B612 Mono', monospace;
    letter-spacing: 2.5px;
    font-weight: 500;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    font-size: 11px;
    color: #2e004e;
  }
  .contact-btn:hover {
    background-color: #2e004e;
    box-shadow: 0px 15px 20px #9984a9;
    color: #fff;
    transform: translateY(-3px);
  }
`;
