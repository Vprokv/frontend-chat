import React from 'react';
import {Form, Input} from "antd";
import {validateField} from "../../utils/helpers";


const FormField = ({
                       name,
                       prefix,
                       placeholder,
                       handleChange,
                       handleBlur,
                       touched,
                       errors,
                       values,
                       type
                   }) => {
    return (
        <Form.Item
            validateStatus={validateField(name, touched, errors)}
            help={!touched[name] ? "" : errors[name]}
            hasFeedback>
            <Input
                id={name}
                prefix={prefix}
                size="large"
                placeholder={placeholder}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
            />
        </Form.Item>
    );
};

export default FormField;