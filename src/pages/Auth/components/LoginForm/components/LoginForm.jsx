import React from 'react';
import {Form} from "antd";
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Button, Block, FormField} from "../../components";
import {Link} from 'react-router-dom';
import {withFormik} from "formik";
import validateForm from "../../../utils/validate";
import {userActions} from "../../../../Chat/redux/actions";
import store from "../../../../Chat/redux/store";



const LoginForm = props =>{
    const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
}
= props;



return (
    <>
        <div className="auth__top">
            <h2>
                Войти в аккаунт
            </h2>
            <p>
                Пожалуйста, войдите в свой аккаунт
            </p>
        </div>
                <Block>
            <form onSubmit={handleSubmit} className="login-form">
                <FormField
                    name="email"
                    prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="E-mail"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                    values={values}
                />
                    <FormField
                        name="password"
                        prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                        placeholder="Пароль"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        values={values}
                        type="password"
                    />
                <Form.Item>
                    {isSubmitting && !isValid && <span> Ошибка!</span>}
                    <Button
                        disabled={isSubmitting}
                        onClick = {handleSubmit}
                        type="primary"
                        size="large"
                        >
                        Войти в аккаунт
                    </Button>
                </Form.Item>
                <Link
                    className="auth__register-link"
                    to="/signUp">
                    Зарегистрироваться
                </Link>
            </form>
        </Block>
    </>
);

}

export default LoginForm;