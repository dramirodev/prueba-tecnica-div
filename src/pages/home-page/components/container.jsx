import { Table } from "../../../components/table/table.jsx";
import { Pagination } from "../../../components/pagination/pagination.jsx";

export default function Container({
  loading,
  people,
  hasPrevPage,
  hasNextPage,
  goNextPage,
  goPrevPage,
}) {
  return (
    <>
      <Table people={people} loading={loading} />
      <Pagination
        goPrevPage={goPrevPage}
        hasPrevPage={hasPrevPage}
        goNextPage={goNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}
