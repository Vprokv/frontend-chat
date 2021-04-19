import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import classNames from 'classnames';


import {Time,IconReaded} from "../"

const Message = ({
                     avatar,
                     user,
                     text,
                     date,
                     isMe,
                     isReaded,
                     attachments,
                     isTyping}) => (
    <div className={classNames("message", {
        'message--isMe': isMe,
        'message--is-typing':isTyping,
        'message--image': attachments && attachments.length ===1,
    })}>
        <IconReaded isMe={isMe} isReaded={isReaded}/>
        <div className="message__content">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullName}`}/>
            </div>
            <div className="message__info">
                {(text || isTyping) && (
                <div className="message__bubble">
                    {text &&
                    <p className="message__text">
                        {text}
                    </p>}
                    {isTyping && (
                    <div className="message__typing">
                        <span/>
                        <span/>
                        <span/>
                    </div>)}
                </div>)}
                <div className="message__attachments">
                    {
                        attachments && attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt="item.filename"/>
                            </div>

                        ))}
                </div>
                {date &&
                <span
                    className="message__date">
                <Time date={{date}}/>

            </span>
                }

            </div>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}

};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.string,
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
};

export default Message;