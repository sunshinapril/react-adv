import { RECEIVE_AUTH_INFO, REQUEST_AUTH_INFO } from "../constants";

import { AuthAction } from "../actions/auth";

const auth = (state: object={}, action: AuthAction) => {
    switch (action.type) {
        case REQUEST_AUTH_INFO:
            return state;
        case RECEIVE_AUTH_INFO:
            return Object.assign({}, state, action);
        default:
            return state
    }
}

export default auth