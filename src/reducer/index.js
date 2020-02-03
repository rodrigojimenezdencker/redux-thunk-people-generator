import { ADD_PERSON, RESET_PEOPLE } from '../actions/action-types';

const initialState = {
    people: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSON:
            return { people: state.people.concat(action.payload.results) }
        case RESET_PEOPLE:
            return { people: [] }
        default:
            return state;
    }
}

export default rootReducer;