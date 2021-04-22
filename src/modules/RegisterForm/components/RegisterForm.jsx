import React from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined,MailOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import {Button, Block} from "../../../components";
import {Link} from 'react-router-dom';
import {validateField} from "../../../utils/helpers"
const success = false;

const RegisterForm = props => {
    const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            isSubmitting
    }
= props;
           return (
            <div>
                    <div className="auth__top">
                        <h2>
                            Регистрация
                        </h2>
                        <p>
                            Для входа в чат,вам нужно зарегистрироваться
                        </p>
                    </div>
                <Block>
                    {!success ?(
                        <form onSubmit={handleSubmit} className="login-form">
                            <Form.Item
                                validateStatus={validateField('email', touched, errors)}
                                help={!touched.email ? "":errors.email }
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
                            <Form.Item>
                                <Input
                                    prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                    size="large"
                                    placeholder="Ваше имя"
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
                            <Form.Item
                                validateStatus={validateField('password', touched, errors)}
                            >
                                <Input
                                    prefix={<LockOutlined  style={{color: "rgba(0,0,0,.25)"}}/>}
                                    type="password2"
                                    size="large"
                                    placeholder="Повторите пароль"/>
                            </Form.Item>
                            <Form.Item>
                                {isSubmitting && !isValid && <span> Ошибка!</span>}
                                <Button
                                    onClick = {handleSubmit}
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    className="login-form-button">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link
                                className="auth__register-link"
                                to="/login">
                                Войти в аккаунт
                            </Link>
                        </form>) :(
                        <div
                            className="auth__success-block">
                            <InfoCircleTwoTone />
                            <h2>
                                Подтвердите свой аккаунт
                            </h2>
                            <p>
                                на вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
                            </p>
                        </div>

                    ) }
                </Block>
            </div>
        );
    };


export default RegisterForm;