import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.footer`
  height: 130px;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: #101524;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  bottom: 0;
  width: 100%;
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }

  p {
    padding: 1rem;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  text-decoration: underline;
  margin: 0.5rem;
`;
