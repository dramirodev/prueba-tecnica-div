export const PEOPLE_API_URL = "https://swapi.dev/api/people/";

export const getPeoplePaginated = async (page) => {
  const response = await fetch(page);
  return await response.json();
};
