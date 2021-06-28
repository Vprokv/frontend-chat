import openNotification from "../../utils/helpers/openNotification";
import {getMe, create, login} from "../../Api";

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
            const {data: {token}, data} =await login(postData)
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
        const {data} = await create(postData)
        return data;
    }
};

export default Actions;

