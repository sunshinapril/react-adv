import { RECEIVE_BIND_LIST, REQUEST_BIND_LIST } from "../constants";

interface IRequestBindList {
    type: REQUEST_BIND_LIST,
    payload: any
}

interface IReceiveBindList {
    type: RECEIVE_BIND_LIST
}

type BindAction = IReceiveBindList | IRequestBindList

export {
    BindAction,
    IRequestBindList,
    IReceiveBindList
}

