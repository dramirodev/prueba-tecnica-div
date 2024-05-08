export function Table({people = []}) {
    return (
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
    )
}
