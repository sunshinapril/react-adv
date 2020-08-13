import { REQUEST_BIND_LIST, RECEIVE_BIND_LIST } from "../constants";

import { BindAction } from '../actions/bind';

const bind = (state: object={}, action: BindAction) => {
    switch(action.type) {
        case REQUEST_BIND_LIST:
            return state;
        case RECEIVE_BIND_LIST: 
            return Object.assign({}, state, action)
        default: 
            return state;
    }
}

export default bind;

