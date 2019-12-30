import styled from 'styled-components';

const Div = styled.div`
  max-width: 600px;
  border: 1px solid;
  min-height: 350px;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 6px;
  padding: 30px;
  box-shadow: 0px 8px 12px 2px rgba(0, 0, 0, 0.15);
  /* background: #9061aa; */
  background-image: linear-gradient(
    to right bottom,
    #2e004e,
    #4e2769,
    #6d4b85,
    #8d70a1,
    #ae96be,
    #b69ac9,
    #bf9fd5,
    #c7a3e0,
    #b785dc,
    #a766d7,
    #9544d1,
    #8116cb
  );
  color: white;

  h2 {
    font-size: 2.8rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-style: italic;
    min-height: 130px;
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`;

const ActLevel = styled.p`
  display: flex;
  justify-content: baseline;
  justify-content: flex-end;
  font-size: 16px;
  font-family: 'B612 Mono', monospace;
  padding-top: 5px;
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  padding-top: 30px;

  button {
    width: 120px;
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

    :hover {
      background-color: #2e004e;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;

const Contact = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: 'Quicksand', sans-serif;
  padding-bottom: 10px;
  p {
    padding-bottom: 2px;
  }
`;

export { Div, ActLevel, ButtonDiv, Contact };
