import {withFormik} from "formik";

import LoginForm from "../components/LoginForm";

import validateForm from "../../../utils/validate"
import {userActions} from "../../../../Chat/redux/actions";

import store from '../../../../Chat/redux/store';

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {
        let errors = {};
        validateForm({isAuth: true, values, errors});
        return errors;
    },
    handleSubmit: async function a (values, { setSubmitting, props }) {
        const result = await userActions.fetchUserLogin(values)
        if (result.status === "success") {
            setTimeout(() => {
                props.history.push("/");
            }, 50);
        }
        setSubmitting(false);
        store.dispatch(result)
    },

    displayName: "LoginForm"
})(LoginForm);


export default LoginFormContainer;