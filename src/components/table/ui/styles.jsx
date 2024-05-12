import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 8px;
    text-align: left;
  }

  td {
    padding: 8px;
    border-bottom: 1px solid #f2f2f2;
  }

  tfoot {
    td {
      font-style: italic;
    }
  }
`;
