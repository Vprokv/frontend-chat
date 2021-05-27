import {withFormik} from "formik";

import LoginForm from "../components/LoginForm";

import validateForm from "../../../../src/utils/validate"
import {userActions} from "../../../redux/actions";

import store from '../../../redux/store';

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
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserLogin(values))
            .then(({ status }) => {
            setSubmitting(false);
            if (status === "success") {
                    props.history.push("/");

            }

       });
    },

    // async a (values, { setSubmitting, props }) {
    //     const result = await userActions.fetchUserLogin(values)
    //     if (result.status === "success") {
    //         setTimeout(() => {
    //             props.history.push("/");
    //         }, 50);
    //     }
    //     setSubmitting(false);
    //     store.dispatch(result)
    // },

    displayName: "LoginForm"
})(LoginForm);


export default LoginFormContainer;