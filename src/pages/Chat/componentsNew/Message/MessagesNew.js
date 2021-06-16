import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import './MessageNew.scss';
// import classNames from 'classnames';
//
// import {convertCurrentTime} from "../../../utils/helpers"

import {Popover, Button, Spin, Empty} from "antd";
//
import {Time, IconReaded, Avatar, } from "../../components/components"
import {EllipsisOutlined} from "@ant-design/icons";



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

                     // isReaded,
                     // isTyping,
                     // onRemoveMessage
                 }) => {

    const isMe = () =>{
//     if (messages.author._id === user._id) {
        return true
//     } else {
//         return false
//     }
}


    if (!messages && !messages._id) {
        return <Empty description="Диалог пуст"/>
    } else  return (

        <div
            //     className={classNames("message", {
            //         "message--isme": isMe==="true",
            //         "message--is-typing": isTyping,
            //     })}
        >
            {messages.map((message) => (
                <div className="message__content">
                    {/*<IconReaded*/}
                    {/*    isMe={isMe}*/}
                    {/*    // isReaded={isReaded}*/}
                    {/*/>*/}
                    {/*<Popover*/}
                    {/*    content={*/}
                    {/*        <div>*/}
                    {/*            <Button onClick={onRemoveMessage}>Удалить сообщение</Button>*/}
                    {/*        </div>*/}
                    {/*    }>*/}
                    <div className="message__icon-actions">
                        <Button>
                            <EllipsisOutlined style={{fontSize: "18px"}}/>
                        </Button>

                    </div>

                    {/*</Popover>*/}
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
                              <Time date={message.createdAt} />
                            </span>
                        )}
                    </div>
                </div>
            ))
            }
        </div>

    )}

MessagesNew.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(
        {
            text:PropTypes.string,
            author: {
                fullName:PropTypes.string,
                _id:PropTypes.string,
            }
        }
    ))
};
    
MessagesNew.defaultProps = {
    messages:[]
};


export default MessagesNew;