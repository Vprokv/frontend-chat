import React from 'react';
import {ChatInput as ChatInputBase} from "../components";
import {connect } from 'react-redux'
import {messagesActions} from "../redux/actions";

const ChatInputCont = ({fetchSendMessage, currentDialogId}) => {
    return <ChatInputBase
        onSendMessage={fetchSendMessage}
        currentDialigId={currentDialogId}
    />
};

export default connect(
    ({dialogs}) => dialogs,
    messagesActions
)(ChatInputCont);