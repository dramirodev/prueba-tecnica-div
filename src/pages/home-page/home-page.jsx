import { usePeople } from "../../reducers/hooks/usePeople.js";
import { Table } from "../../components/table/table.jsx";
import { Pagination } from "../../components/pagination/pagination.jsx";

export function HomePage() {
  const { loading, people, hasPrevPage, hasNextPage, goNextPage, goPrevPage } =
    usePeople();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <Table people={people} />
        <Pagination
          hasPrevPage={loading || hasPrevPage}
          hasNextPage={loading || hasNextPage}
          goNextPage={goNextPage}
          goPrevPage={goPrevPage}
        />
      </main>
    </div>
  );
}
