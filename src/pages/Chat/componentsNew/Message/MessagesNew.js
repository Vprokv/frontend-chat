import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Popover, Button, Spin, Empty} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";

import {Time, Avatar } from "../../components/components"
import './MessageNew.scss';
import {removeMessageById} from "../../Api";


// const Messages = ({onRemoveMessage, blockRef, isLoading, items, user, className}) => {
//     return(
//         <div
//             ref={blockRef}
//             className={`message ${className} ${isLoading} ${isLoading ? "messages--loading" : ""}`}
//         >
//             {isLoading? (
//                 <Spin
//                     tip="Загрузка сообщений..."
//                     size="large"
//                 />
//             ) : items && !isLoading? (
//                 items.length > 0? (
//                     items.map(item =>
//                         <Message
//                             key={item._id}
//                             {...item}
//                             isMe={user._id === item.user._id}
//                             onRemoveMessage={onRemoveMessage.bind(this, item._id)}
//                         />)
//                 ) : (
//                     <Empty description="Диалог пуст"/>
//                 )
//             ) : (
//                 <Empty description="Откройте диалог"/>
//             )}
//         </div>
//     );
// };

const MessagesNew = ({
                         messages,
                         user,
                     }) => {


    const messagesRef = useRef(null);
    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);


    const RemoveMessage = async (message) => {
        if (window.confirm("Вы действительно хотите удалить сообщение")) {
            try {
                await removeMessageById(message._id)
            } catch (e) {
                return "Ошибка при удалении"
            }
        }
    }

    return (
        <div
            ref={messagesRef}
        >
            {messages.map((message) => (
                <div className={message.author._id === user._id ? "message--is-me" : "message"}>
                    <div className="message__content">
                        {messages && !message._id ?
                            <Empty description="Диалог пуст. Отправьте первое сообщение"/>
                            : (
                                <>
                                    <Popover
                                        content={
                                            <div>
                                                <Button
                                                    onClick={RemoveMessage}>
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
                                        <Avatar user={message.author}/>
                                    </div>
                                    <div className="message__info">
                                        <div className="message__bubble">
                                            {message.text &&
                                            <p className="message__text">{message.text}</p>
                                            }
                                            {/*                {isTyping && (*/}
                                            {/*                    <div className="message__typing">*/}
                                            {/*                        <span />*/}
                                            {/*                        <span />*/}
                                            {/*                        <span />*/}
                                            {/*                    </div>*/}
                                            {/*                )}*/}
                                            {/*                />}*/}
                                        </div>
                                        {message.createdAt && (
                                            <span className="message__date">
                              <Time date={message.createdAt}/>
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

