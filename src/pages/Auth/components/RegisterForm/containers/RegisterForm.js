import {withFormik} from "formik";
import RegisterForm from '../components/RegisterForm';
import validateForm from "../../../utils/validate"

import {userActions} from "../../../../Chat/redux/actions";

import store from '../../../../Chat/redux/store';

export const RegisterFormCont = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        fullName: '',
        password: "",
        password_2: "",
    }),
    validate: values => {
        let errors = {};
        validateForm({isAuth: false, values, errors});

        return errors;
    },
    handleSubmit: async function a (values, { setSubmitting, props }) {
        console.log(5)
        const result = userActions.fetchUserRegister(values)

        // if (result.status === "success") {
        //     setTimeout(() => {
        //         props.history.push("/signUp/verify");
        //     }, 50);
        // }
        setSubmitting(false);
        store.dispatch(result)
    },
    displayName: "RegisterForm"
})(RegisterForm);

