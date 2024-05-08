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

    return (
        <div className="App">
            <header className="App-header">
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Eye Color</th>
                        <th>Hair Color</th>
                        <th>Height</th>
                    </tr>
                    </thead>
                    <tbody>
                    {people?.map((person, key) => (
                        <tr key={`${person.name}-${key}`}>
                            <td>{person.name}</td>
                            <td>{person.birth_year}</td>
                            <td>{person.gender}</td>
                            <td>{person.eye_color}</td>
                            <td>{person.hair_color}</td>
                            <td>{person.height}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={goPrevPage} disabled={loading || !prevPage}>
                        Previous
                    </button>
                    <button onClick={goNextPage} disabled={loading || !nextPage}>
                        Next
                    </button>
                </div>
            </main>
        </div>);
}

export default App
