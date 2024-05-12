import { StyledPagination } from "./ui/styles.jsx";

export function Pagination({
  hasPrevPage,
  hasNextPage,
  goNextPage,
  goPrevPage,
}) {
  return (
    <StyledPagination>
      <button onClick={goPrevPage} disabled={hasPrevPage}>
        Previous
      </button>
      <button onClick={goNextPage} disabled={hasNextPage}>
        Next
      </button>
    </StyledPagination>
  );
}
