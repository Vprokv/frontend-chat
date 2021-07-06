import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Popover, Button, Spin, Empty} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import "../../Chat.scss"
import Time from "../Time/index"
import Avatar from "../Avatar/Avatar"
import './MessageNew.scss';
import {removeMessageById} from "../../Api";

const MessagesNew = ({
                         messages,
                         user,

                     }) => {


    const messagesRef = useRef(null);
    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);


    const RemoveMessage = async (id) => {
        try {
            if (window.confirm("Вы действительно хотите удалить сообщение")) {
                await removeMessageById(id)
            }
        } catch (e) {
            return e.message
        }
    }

    return (
        <div className="chat__dialog-messages"
            ref={messagesRef}

        >
            {messages.map((message) => (
                <div className={message.author_id === user._id ? "message--is-me" : "message"}>
                    <div className="message__content">
                        {!message._id ?
                            <Empty description="Диалог пуст. Отправьте первое сообщение"/>
                            : (
                                <>
                                    <Popover
                                        content={
                                            <div>
                                                <Button
                                                    onClick={() => RemoveMessage(message._id)}>
                                                    Удалить сообщение
                                                </Button>
                                            </div>
                                        }>
                                        <div className="message__icon-actions">
                                            <Button>
                                                <EllipsisOutlined style={{fontSize: "18px"}}/>
                                            </Button>
                                        </div>

                                    </Popover>
                                    <div className="message__avatar">
                                        <Avatar user={message}/>
                                    </div>
                                    <div className="message__info">
                                        <div className="message__bubble">
                                            {message.text &&
                                            <p className="message__text">{message.text}</p>
                                            }
                                        </div>
                                        {message.createdat && (
                                            <span className="message__date">
                              <Time date={message.createdat}/>
                            </span>
                                        )}
                                    </div>
                                </>)}
                    </div>
                </div>

            ))
            }
        </div>

    )
}

MessagesNew.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(
        {
            text: PropTypes.string,
            author: {
                fullName: PropTypes.string,
                _id: PropTypes.string,
            }
        }
    ))
};

MessagesNew.defaultProps = {
    messages: []
};

export default connect(
    ({user}) => ({user: user.data}))(MessagesNew);

