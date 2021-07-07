import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SmileOutlined, CameraOutlined,AudioOutlined, SendOutlined} from "@ant-design/icons";
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload'
import { Picker } from 'emoji-mart'

import './ChatInput.scss';
import {sendMessage} from "../../Api"

const ChatInput = props => {
    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState("");
    const {currentDialog} = props;

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

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
    currentDialog :PropTypes.string,
    onSendMessage : {},
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;