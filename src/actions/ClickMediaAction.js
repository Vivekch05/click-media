import { GET_LIST, GET_PROFILE, CHAT_LIST } from './Types';
import axios from 'axios';
export const getList = () => (dispatch) => {
    axios.get("https://panorbit.in/api/users.json")
        .then((response) => {
            console.log(response.data.users);
            dispatch({ type: GET_LIST, payload: response.data.users });
        });
};

export const getProfile = (profileItem, id) => (dispatch) => {
    console.log("jkgjhfjfjddgh" + id);
    const currentProfile = profileItem.filter((item => item.id === id))
    console.log(currentProfile);
    dispatch({ type: GET_PROFILE, payload: currentProfile })
}

export const chatLayout = (chatList, id) => (dispatch) => {
    const currentChat = chatList.filter((item) => item.id === id);
    dispatch({ type: CHAT_LIST, payload: currentChat });

}