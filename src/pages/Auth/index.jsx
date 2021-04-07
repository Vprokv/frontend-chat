import React from 'react';
import {Form, Inpu, Input} from 'antd';
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

                    </Block>
                </div>

            </section>

    );
};




export default WrappedNormalLoginForm;