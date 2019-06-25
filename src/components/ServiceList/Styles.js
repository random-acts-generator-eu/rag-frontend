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
