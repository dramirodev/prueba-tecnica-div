import styled from "styled-components";

export const StyledPagination = styled.div`
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
