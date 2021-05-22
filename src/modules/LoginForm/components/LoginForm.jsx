import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Button, Block} from "../../../components";
import {Link} from 'react-router-dom';
import {validateField} from "../../../utils/helpers"


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
    <React.Fragment>
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
                <Form.Item
                    validateStatus={validateField("email", touched, errors)}
                    help={!touched.email ? "" : errors.email}
                    hasFeedback>
                    <Input
                        id="email"
                        prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                        size="large"
                        placeholder="E-Mail"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={validateField('password', touched, errors)}
                    help={!touched.password ? "" : errors.password }
                    hasFeedback>
                    <Input
                        id="password"
                        prefix={<LockOutlined  style={{color: "rgba(0,0,0,.25)"}}/>}
                        type="password"
                        size="large"
                        placeholder="Пароль"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                </Form.Item>
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
    </React.Fragment>
);

}

export default LoginForm;