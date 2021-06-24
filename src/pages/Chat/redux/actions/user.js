import openNotification from "../../utils/helpers/openNotification";
import {getMe, signUp, signIn} from "../../Api";

const Actions = {
    setUserData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    setIsAuth: bool => ({
        type: "USER:SET_IS_AUTH",
        payload: bool
    }),
    fetchUserData: () => async dispatch=> {
       try {
           dispatch(Actions.setUserData(await getMe()))
       }
       catch (err){
           if (err.response.status === 403) {
               dispatch(Actions.setIsAuth(false))
               delete window.localStorage.token;
           }
       }
    },
    fetchUserLogin: postData => async dispatch => {
        try {
            await signIn(postData)
            return (({data}) => {
                const {token} = data;
                openNotification({
                    title: "Отлично!",
                    text: "Авторизация успешна.",
                    type: "success"
                });
                window.axios.defaults.headers.common["token"] = token;
                window.localStorage["token"] = token;
                dispatch(Actions.fetchUserData());
                dispatch(Actions.setIsAuth(true));
                return data;
            })
        } catch (e) {
            if (e.status === 403) {
                openNotification({
                    title: "Ошибка при авторизации",
                    text: "Неверный логин или пароль",
                    type: "error"
                });
            }
        }
    },

    fetchUserRegister: postData => async dispatch => {
        await signUp(postData)
        return (({data}) => {
            return data;
        });
    }
};

export default Actions;

