import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Popover, Button, Spin, Empty} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";

import {Time, Avatar } from "../../components/components"
import './MessageNew.scss';
import {Api} from "../../utils/api";




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

    const isMe = () => (messages.author._id === user._id ? isMe : "")

    const messagesRef = useRef(null);
    //повесить реф на эл0т который скроллит


    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);

    const removeMessageById = (messageId) =>  {
            if (window.confirm("Вы действительно хотите удалить сообщение")) {
                Api
                    .removeMessageById(messageId)
                    .then(({data}) => {
                        dispatch({
                            type: "MESSAGES:REMOVE_MESSAGE",
                            payload: id
                        });
                    })
                    .catch(() => {
                        // dispatch(Actions.setIsLoading(false));
                    });
            }
        }

    return (
        <div
            ref={messagesRef}
            className={isMe ? "message-is-me" : "message"}
        >
            {messages.map((message) => (
                <div className="message__content">
                    {messages && !message._id ?
                        <Empty description="Диалог пуст. Отправьте первое сообщение"/>
                        : (
                            <>
                                <Popover
                                    content={
                                        <div>
                                            <Button
                                                onClick={removeMessageById}>
                                                Удалить сообщение
                                            </Button>
                                        </div>
                                    }>
                                    <div className="message__icon-actions">
                                        <Button >
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

