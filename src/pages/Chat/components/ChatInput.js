import React from 'react';
import {connect } from 'react-redux'

import {ChatInput as ChatInputBase} from "./components";
import {messagesActions} from "../redux/actions";
import PropTypes from "prop-types";

const ChatInput = ({fetchSendMessage, currentDialog}) => {

    return (
            <ChatInputBase
                onSendMessage={fetchSendMessage}
                currentDialogId={currentDialog}
            />
        )
};

ChatInput.defaultProps = {
    currentDialog :PropTypes.string,
};

export default ChatInput;

// export default connect(
//     ({dialogs}) => ({
//         dialogs
//     }),
//     messagesActions
// )(ChatInput);