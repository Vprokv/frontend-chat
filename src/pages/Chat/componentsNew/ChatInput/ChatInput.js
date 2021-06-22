import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SmileOutlined, CameraOutlined,AudioOutlined, SendOutlined} from "@ant-design/icons";
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload'
import { Picker } from 'emoji-mart'

import './ChatInput.scss';
import {messagesApi} from "../../utils/api";

const ChatInput = props => {
    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState("");
    const {currentDialog} = props;

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };



    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            messagesApi
                .send(value, currentDialog)
                .then(()=> null)
            setValue('');
        }
    }


    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible &&(
                    <div className="chat-input__emoji-picker">
                        <Picker
                            set='apple'/>
                    </div>
                )}

                <Button
                    onClick={toggleEmojiPicker}
                    type="link"
                    icon={<SmileOutlined/>} />

            </div>

            <Input
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleSendMessage}
                placeholder="Введите текст сообщения..."
                size="large"
                value={value}

            />
            <div className="chat-input__actions">


                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple"
                    }}
                >
                    <Button type="link" icon={<CameraOutlined/>} />
                </UploadField>

                {value ? (
                    <Button type="link" icon={<SendOutlined/>}/>
                ) : (
                    <Button type="link" icon={<AudioOutlined/>} />
                )}
            </div>
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