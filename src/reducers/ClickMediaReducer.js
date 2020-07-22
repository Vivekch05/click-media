import { GET_LIST, GET_PROFILE, CHAT_LIST } from "../actions/Types";

const initState = {
    list: [],
    profileList: [],
    chatListItem: []
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.payload,
            };
        case GET_PROFILE:
            return {
                ...state,
                profileList: action.payload
            }
        case CHAT_LIST:
            return {
                ...state,
                chatListItem: action.payload
            }
        default:
            return state;
    }
}