import styled from 'styled-components';
import { Link } from 'react-router-dom';

import sideImage from '../../assets/sideImage.jpg';

export const LoginForm = styled.div`
  box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.15);
  width: 70%;
  height: 70vh;
  margin: 5rem auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: row-reverse;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
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

  @media (max-width: 800px) {
    width: 100%;
  }
  h2 {
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
    color: #6a0f4973;
  }
  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    label {
      text-transform: uppercase;
      color: #a8a9af;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      margin-bottom: 0.5rem;
      background-color: transparent;
      color: black;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
      font-weight: bold;

      &:focus {
        border-bottom: 1px solid #6a0f4973;
      }
    }
  }
  button {
    width: 50%;
    padding: 1rem;
    color: white;
    background-image: linear-gradient(
      to right top,
      #6a0f49c2,
      #7b2f6ac4,
      #884b8ec9,
      #9267b1c4,
      #9984d3cb,
      #968adbd5,
      #9190e2b6,
      #8e96e9b9
    );
    margin-left: 1rem;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.15);
      color: #eeeeee;
    }
    &:focus {
      outline: 0;
    }
  }
`;

export const SideNote = styled.div`
  width: 50%;
  background: linear-gradient(
      to right top,
      #6d084873,
      #7907606c,
      #73097c36,
      #5d079b52,
      #4b1fc36c,
      #968adb7e,
      #9190e259,
      #8e96e967
    ),
    url(${sideImage}) no-repeat center;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-family: 'Quicksand', sans-serif;

  @media (max-width: 800px) {
    width: 100%;
  }
  h3 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  strong {
    font-weight: bold;
    font-size: 1.5rem;
  }
  p {
    word-spacing: 1.2;
    line-height: 1.4;
  }

  section {
    margin-top: 4rem;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 30%;
  padding: 0.5rem 0.7rem;
  color: white;
  background-color: transparent;
  border: solid 2px white;
  margin: 7rem auto 1rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: white;
    color: #0e121e;
  }
`;
