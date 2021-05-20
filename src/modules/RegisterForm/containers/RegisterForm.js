import {withFormik} from "formik";
import RegisterForm from '../components/RegisterForm';
import validateForm from "../../../../src/utils/validate"

import {userActions} from "../../../redux/actions";

import store from '../../../redux/store';

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