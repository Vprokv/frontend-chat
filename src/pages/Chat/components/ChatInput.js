import React from 'react';
import {connect } from 'react-redux'

import {ChatInput as ChatInputBase} from "../../Auth/components/components";
import {messagesActions} from "../redux/actions";

const ChatInput = ({fetchSendMessage, dialogs}) => {

    return (
            <ChatInputBase
                onSendMessage={fetchSendMessage}
                currentDialogId={dialogs.currentDialogId}
            />
        )
};

ChatInput.defaultProps = {
    dialogs :{}
};

export default connect(
    ({dialogs}) => ({
        dialogs
    }),
    messagesActions
)(ChatInput);