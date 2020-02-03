import { ADD_PERSON, RESET_PEOPLE} from './action-types';

export function addPerson(payload) {
    return function (dispatch) {
        return fetch("https://randomuser.me/api/?results=" + payload.number_people + "&gender=" + payload.gender + "&nat=" + payload.nationality)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: ADD_PERSON, payload: json });
            });
    }
}

export function resetPeople() {
    return ({ type: RESET_PEOPLE })
}