import {withFormik} from "formik";
import RegisterForm from '../components/RegisterForm';
import validateForm from "../../../utils/validate"

import {userActions} from "../../../../Chat/redux/actions";

import store from '../../../../Chat/redux/store';

export default withFormik({
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
    handleSubmit: (values, {setSubmitting, props}) => {
        store.dispatch(userActions.fetchUserRegister(values)).then(({status}) => {
            if (status === "success") {
                setTimeout(() => {
                    props.history.push("/");
                }, 50);
            }
            setSubmitting(false);
        })
            .catch(() => {

            });
    },
    displayName: "RegisterForm"
})(RegisterForm);