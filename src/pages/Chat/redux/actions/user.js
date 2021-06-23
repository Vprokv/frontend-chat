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
    fetchUserLogin: postData => dispatch => {
        return (
            signIn(postData)
            .then(({data}) => {
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
            .catch(({response}) => {
                if (response.status === 403) {
                    openNotification({
                        title: "Ошибка при авторизации",
                        text: "Неверный логин или пароль",
                        type: "error"
                    });
                }
            });
    },
    fetchUserRegister: postData => async dispatch => {
        return signUp(postData)
            .then(({data}) => {
            return data;
        });
    }
};

export default Actions;

