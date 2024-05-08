export const PEOPLE_API_URL = 'https://swapi.dev/api/people/'


export const getPeoplePaginated = async (page) => {
    const response = await fetch(`${PEOPLE_API_URL}?page=${page}`);
    return await response.json()
}

export const getPerson = async (id) => {
    const response = await fetch(`${PEOPLE_API_URL}${id}/`)
    return await response.json()
}
