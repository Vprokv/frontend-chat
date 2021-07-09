import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';

import './ChatInput.scss';
import {sendMessage} from "../../Api"

const ChatInput = props => {
    const [value, setValue] = useState("");
    const {currentDialog} = props;


    const handleSendMessage = async (e) => {
        if (e.keyCode === 13) {
            await sendMessage(value, currentDialog)
            setValue('');
        }
    }
    return (
        <div className="chat-input">
            <Input
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleSendMessage}
                placeholder="Введите текст сообщения..."
                size="large"
                value={value}

            />
        </div>
    );
};

ChatInput.defaultProps = {
    currentDialog : ""
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;