import {useCallback, useEffect, useReducer, useRef} from "react";
import {PeopleActionTypes, PeopleInitialState, PeopleReducer} from "../people.js";
import {getPeoplePaginated} from "../../api/people.js";

export function usePeople() {
    const [{
        currentPage,
        loading,
        people,
        prevPage,
        nextPage,
        totalPages
    }, dispatch] = useReducer(PeopleReducer, PeopleInitialState);

    const oldPage = useRef(0);

    const goNextPage = useCallback(() => {
        dispatch({
            type: PeopleActionTypes.SET_CURRENT_PAGE,
            payload: nextPage
        })
    },[nextPage]);

    const goPrevPage = useCallback(() => {
        dispatch({
            type: PeopleActionTypes.SET_CURRENT_PAGE,
            payload: prevPage
        })
    },[prevPage]);

    useEffect(() => {
        if (currentPage < 1 || currentPage === oldPage.current) {
            return
        }
        oldPage.current = currentPage
        dispatch({type: PeopleActionTypes.FETCH_PEOPLE})
        getPeoplePaginated(currentPage)
            .then(data => {
                dispatch({
                    type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
                    payload: {results: data.results, count: data.count, page: currentPage}
                })

            })
            .catch(error => {
                dispatch({type: PeopleActionTypes.FETCH_PEOPLE_ERROR, payload: error})
            })

    }, [currentPage, dispatch, oldPage])

    return {
        loading,
        people,
        prevPage,
        nextPage,
        goNextPage,
        goPrevPage,
        totalPages
    }
}
