import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ChatInput.scss';
import {SmileOutlined, CameraOutlined,AudioOutlined, SendOutlined} from "@ant-design/icons";
import { Input, Button } from 'antd';


const ChatInput = props => {
    const [value, setValue] = useState("");


    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" icon={<SmileOutlined/>} />

            </div>

            <Input
                onChange={e => setValue(e.target.value)}
                placeholder="Введите текст сообщения..."
                size="large"

            />
            <div className="chat-input__actions">
                <Button type="link" icon={<CameraOutlined/>} />

                {value ? (
                    <Button type="link" icon={<SendOutlined/>}/>
                    ) : (
                        <Button type="link" icon={<AudioOutlined/>} />
                )}
            </div>
        </div>
    );
}

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;