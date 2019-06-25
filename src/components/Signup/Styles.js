import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignupForm = styled.div`
  box-shadow: 2px 2px 2px 2px #373d51;
  width: 70%;
  margin: 5rem auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: row-reverse;
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
    input {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      font-size: 1.2rem;
      background-color: #d1d1d1;
      color: white;
      outline: none;
      border-radius: 5px;
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

export const SideNote = styled.div`
  width: 30%;
  color: white;
  background-image: linear-gradient(
    to right top,
    #6a0f49,
    #7b2f6b,
    #884b8e,
    #9267b1,
    #9984d3,
    #968adb,
    #9290e2,
    #8e96e9
  );
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  h3 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 50%;
  padding: 0.5rem 1rem;
  color: white;
  background-color: transparent;
  border: solid 2px white;
  margin: 10rem auto 1rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
`;
