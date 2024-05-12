import { StyledTable } from "./ui/styles.jsx";
import { Loader } from "../../pages/home-page/ui/styles.jsx";

export function Table({ people = [], loading }) {
  return (
    <StyledTable>
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
      <tfoot>
        <tr>
          <td colSpan="6">{loading ? <Loader /> : ""}</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
}
