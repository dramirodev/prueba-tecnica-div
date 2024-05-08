import './App.css'
import {usePeople} from "./reducers/hooks/usePeople.js";

function App() {
    const {
        loading,
        people,
        prevPage,
        nextPage,
        goNextPage,
        goPrevPage
    } = usePeople();




    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <ul>
                    {people?.map((person) => (
                        <li key={person.name}>{person.name}</li>
                    ))}
                </ul>

                <div>
                    {prevPage && (
                        <button onClick={goPrevPage}>
                            Previous
                        </button>
                    )}
                    {nextPage && (
                        <button onClick={goNextPage}>
                            Next
                        </button>
                    )}
                </div>
            </main>
        </div>);
}

export default App
