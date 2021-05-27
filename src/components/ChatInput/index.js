import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SmileOutlined, CameraOutlined,AudioOutlined, SendOutlined} from "@ant-design/icons";
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload'
import { Picker } from 'emoji-mart'

import './ChatInput.scss';

const ChatInput = props => {
    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState("");
    const {onSendMessage, currentDialogId} = props;

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleSendMassage = (e) => {
        if (e.keyCode === 13) {
            onSendMessage(value, currentDialogId)
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
                onKeyUp={handleSendMassage}
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

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;