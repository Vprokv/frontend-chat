import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import {Block, Button} from "../../components";
import "./Auth.scss";

class Auth extends React.component{
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
        if (!err) {
            console.log("Received values of form: ", values);
        }
        });
};
    render () {
        const {getFieldDecorator} = this.props.form;
        return (
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>
                            Войти в аккаунт
                        </h2>
                        <p>
                            Пожалуйста, войдите в свой аккаунт
                        </p>
                    </div>

                    <Block>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                                {getFieldDecorator('userName', {
                                    rules:[{
                                        requires:true,
                                        message:'Please input your username'}],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        size="Large"
                                        placeholder="username"/>
                                )}

                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules:[{
                                        requires:true,
                                        message:'Please input your Password'}],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
                                        type="password"
                                        size="large"
                                        placeholder="password"/>
                                )}

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
                            <a className="auth__register-link" href="#">Зарегистрироваться</a>
                        </form>
                    </Block>
                </div>

            </section>

    );
};



const WrappedNormalLoginForm = Form.create({name: "auth"}) (Auth);

export default WrappedNormalLoginForm;