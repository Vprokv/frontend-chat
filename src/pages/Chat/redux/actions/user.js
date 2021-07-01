import openNotification from "../../utils/helpers/openNotification";
import {getMe, create, login} from "../../Api";
import {history} from "../../../../index";

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
       catch (e){
           if (e.response.status === 403) {
               dispatch(Actions.setIsAuth(false))
               delete window.localStorage.token;
           }
       }
    },
    fetchUserLogin: (postData) => async dispatch => {
        try {
            const {data: {token}, data} = await login(postData)
            console.log(data)
            if (data.status === "success") {
                setTimeout(() => {
                        history.push("/");
                    }, 100);
            }
            openNotification({
                title: "Отлично!",
                text: "Авторизация успешна.",
                type: "success"
            });
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage["token"] = token;
            dispatch(Actions.setIsAuth(true));
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

    fetchUserRegister: (postData) => async dispatch => {
        try {
            const {data} = await create(postData)
            if (data.status === "success") {
                setTimeout(() => {
                    history.push("/signUp/verify");
                }, 100);
            }
            dispatch(Actions.setIsAuth(false));
        } catch (e) {
            if (e.status === 404)
            openNotification({
                title: "Ошибка при регистрации",
                type: "error"
            });
        }
    }
};

export default Actions;

