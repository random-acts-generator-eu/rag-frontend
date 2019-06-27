import styled from 'styled-components';

const Div = styled.div`
  width: 60%;
`;
export default Div;

export const TableDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: separate !important;
  overflow: hidden;
  border-spacing: 0;
  margin-top: 12px;
  box-shadow: 0 8px 6px -6px black;
  border-radius: 7px;
  font-family: 'Quicksand', sans-serif;

  thead {
    background-color: rgba(130, 91, 216, 0.78);
  }

  td,
  th {
    padding: 19px;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  th {
    text-transform: capitalize;
    color: white;
  }
  td {
    border-bottom: 1px solid #f2f2f2;
    color: #666666;
  }

  td a .fa-user-edit {
    color: #666666;
    padding-right: 15px;
  }
`;
