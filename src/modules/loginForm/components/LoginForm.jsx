import React, {Component} from 'react';
import {Form, Input} from "antd";
import Icon from '@ant-design/icons';
import {Button} from "../../../components";

class LoginForm extends Component{
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item validateStatus="success" hasFeedback>
                    <Input
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        size="Large"
                        placeholder="username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
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
                <a className="auth__register-link" href="JavaScript://">Зарегистрироваться</a>
            </form>
        );
    }
}

export default LoginForm;