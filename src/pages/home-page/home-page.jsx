import { usePeople } from "../../reducers/hooks/usePeople.js";
import { lazy, Suspense } from "react";
import { Loader } from "./ui/styles.jsx";

const ContainerComponet = lazy(() => import("./components/container.jsx"));

export function HomePage() {
  const { loading, people, hasPrevPage, hasNextPage, goNextPage, goPrevPage } =
    usePeople();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <ContainerComponet
            loading={loading}
            people={people}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            goNextPage={goNextPage}
            goPrevPage={goPrevPage}
          />
        </Suspense>
      </main>
    </div>
  );
}
