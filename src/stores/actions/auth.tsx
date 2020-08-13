import { REQUEST_AUTH_INFO, RECEIVE_AUTH_INFO } from "../constants";

interface IRequestAuthInfo {
    type: REQUEST_AUTH_INFO,
    payload: any
}

interface IReceiveAuthInfo {
    type: RECEIVE_AUTH_INFO
}

type AuthAction = IRequestAuthInfo | IReceiveAuthInfo

export {
    AuthAction,
    IReceiveAuthInfo,
    IRequestAuthInfo
}
