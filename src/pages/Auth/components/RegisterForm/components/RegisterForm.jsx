import React from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined,MailOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import {Button, Block, FormField} from "../../components";
import {Link} from 'react-router-dom';
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
            <>
                    <div className="auth__top">
                        <h2>
                            Регистрация
                        </h2>
                        <p>
                            Для входа в чат,вам нужно зарегистрироваться
                        </p>
                    </div>
                <Block>
                    {!success ? (
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
                                name="fullName"
                                prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                placeholder="Ваше имя"
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

                            <FormField
                                name="password_2"
                                prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                placeholder="Повторите пароль"
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
                                    className="login-form-button"
                                    size="large"
                                >

                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link
                                className="auth__register-link"
                                to="/signIn">
                                Войти в аккаунт
                            </Link>
                        </form>
                    ) :(
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
            </>
        );
    };


export default RegisterForm;