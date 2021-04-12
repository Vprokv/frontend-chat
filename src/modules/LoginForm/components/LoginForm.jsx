import React, {Component} from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined } from '@ant-design/icons';
import {Button, Block} from "../../../components";
import {Link} from 'react-router-dom';


class LoginForm extends Component{
    render() {
        return (
            <div>
                <Block>
                    <div className="auth__top">
                        <h2>
                            Войти в аккаунт
                        </h2>
                        <p>
                            Пожалуйста, войдите в свой аккаунт
                        </p>
                    </div>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                size="Large"
                                placeholder="username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                id="password"
                                prefix={<LockOutlined  style={{color: "rgba(0,0,0,.25)"}}/>}
                                type="password"
                                size="large"
                                placeholder="password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link
                            className="auth__register-link"
                            to="/register">
                            Зарегистрироваться
                        </Link>
                    </form>
                </Block>
            </div>
        );
    }
}

export default LoginForm;