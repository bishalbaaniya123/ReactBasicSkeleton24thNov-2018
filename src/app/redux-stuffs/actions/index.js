import {JWT_TOKEN} from "../constant/index";

export const token = (token) => {
    return {
        type: JWT_TOKEN,
        payload: token
    }
};
export const tokenStore = (token) => {
    return {
        type: "TOKEN_STORE",
        payload: token
    }
};
export const username = (username) => {
    return {
        type: "USERNAME",
        payload: username
    }
};