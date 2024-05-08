import './App.css'
import {usePeople} from "./reducers/hooks/usePeople.js";
import {Table} from "./components/table/table.jsx";
import {Pagination} from "./components/pagination/pagination.jsx";

function App() {
    const {
        loading,
        people,
        prevPage,
        nextPage,
        goNextPage,
        goPrevPage
    } = usePeople();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <Table people={people} loading={loading} prevPage={prevPage} nextPage={nextPage} goNextPage={goNextPage}
                       goPrevPage={goPrevPage}/>
                <Pagination hasPrevPage={loading || !prevPage} hasNextPage={loading || !nextPage} goNextPage={goNextPage} goPrevPage={goPrevPage}/>
            </main>
        </div>);
}

export default App
