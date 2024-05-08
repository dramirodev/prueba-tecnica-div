export const PeopleInitialState = {
    people: [],
    loading: false,
    error: null,
    currentPage: 1,
    prevPage: null,
    nextPage: null,
    totalPages: null,
}

export const PeopleActionTypes = {
    FETCH_PEOPLE: 'FETCH_PEOPLE',
    FETCH_PEOPLE_SUCCESS: 'FETCH_PEOPLE_SUCCESS',
    FETCH_PEOPLE_ERROR: 'FETCH_PEOPLE_ERROR',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
}

function calculatePageOffset(page) {
    return page * 10 - 10
}

function calculateNextPage(page, count) {
    const calculatedPage = page + 1
    return calculatedPage <= count ? calculatedPage : null
}

function calculatePrevPage(page) {
    const calculatedPage = page - 1
    return calculatedPage > 0 ? calculatedPage : null
}

export const PeopleReducer = (state, action) => {
    switch (action.type) {
        case PeopleActionTypes.FETCH_PEOPLE:
            return {...state, loading: true}
        case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:

            return {
                ...state,
                loading: false,
                people: action.payload.results,
                currentPage: action.payload.page,
                nextPage: calculateNextPage(action.payload.page, action.payload.count),
                prevPage: calculatePrevPage(action.payload.page),
                totalPages: action.payload.count,
            }
        case PeopleActionTypes.SET_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.payload,
                nextPage: calculateNextPage(action.payload, state.count),
                prevPage: calculatePrevPage(action.payload),
            }
        case PeopleActionTypes.FETCH_PEOPLE_ERROR:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}

