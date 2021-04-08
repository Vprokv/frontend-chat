import React, {Component} from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined,MailOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import {Button, Block} from "../../../components";
import {Link} from 'react-router-dom';


class RegisterForm extends Component{
    render() {
        const success = true;
        return (
            <div>
                <Block>
                    <div className="auth__top">
                        <h2>
                            Регистрация
                        </h2>
                        <p>
                            Для входа в чат,вам нужно зарегистрироваться
                        </p>
                    </div>
                    {!success ?
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input
                                    prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                    size="Large"
                                    placeholder="E-Mail"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                    size="Large"
                                    placeholder="Ваше имя"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<LockOutlined  style={{color: "rgba(0,0,0,.25)"}}/>}
                                    type="password"
                                    size="large"
                                    placeholder="Пароль"/>
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<LockOutlined  style={{color: "rgba(0,0,0,.25)"}}/>}
                                    type="password"
                                    size="large"
                                    placeholder="Повторите пароль"/>
                            </Form.Item>
                            <Form.Item>
                                <Button
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
                        </form> :
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

                        }
                </Block>
            </div>
        );
    }
}

export default RegisterForm;