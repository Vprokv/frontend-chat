import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {getMessages} from "../api";
// import './Message.scss';
// import classNames from 'classnames';
//
// import {convertCurrentTime} from "../../../utils/helpers"
//
// import waveSvg from '../../../assets/img/wave.svg';
// import pauseSvg from '../../../assets/img/pause.svg';
// import playSvg from '../../../assets/img/play.svg';
import {Popover, Button, Spin, Empty} from "antd";
//
import {Time, IconReaded, Avatar, } from "../components/components"
import {EllipsisOutlined} from "@ant-design/icons";

// const MessageAudio = ({ audioSrc }) => {
//     const audioElem = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [progress, setProgress] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);
//
//     const togglePlay = () => {
//         if (!isPlaying) {
//             audioElem.current.play();
//         } else {
//             audioElem.current.pause();
//         }
//     };
//
//     useEffect(() => {
//         audioElem.current.volume = "0.01";
//         audioElem.current.addEventListener(
//             "playing",
//             () => {
//                 setIsPlaying(true);
//             },
//             false
//         );
//         audioElem.current.addEventListener(
//             "ended",
//             () => {
//                 setIsPlaying(false);
//                 setProgress(0);
//                 setCurrentTime(0);
//             },
//             false
//         );
//         audioElem.current.addEventListener(
//             "pause",
//             () => {
//                 setIsPlaying(false);
//             },
//             false
//         );
//         audioElem.current.addEventListener("timeupdate", () => {
//             const duration = (audioElem.current && audioElem.current.duration) || 0;
//             setCurrentTime(audioElem.current.currentTime);
//             setProgress(((audioElem.current.currentTime / duration) * 100)+(duration));
//         });
//     }, []);
//
//     return (
//         <div className="message__audio">
//             <audio ref={audioElem} src={audioSrc} preload="auto"/>
//             <div
//                 className="message__audio-progress"
//                 style={{width: progress + "%"}}
//             />
//             <div className="message__audio-info">
//                 <div className="message__audio-btn">
//                     <button onClick={togglePlay}>
//                         {isPlaying ? (
//                             <img src={pauseSvg} alt="Pause svg"/>
//                         ) : (
//                             <img src={playSvg} alt="Play svg"/>
//                         )}
//                     </button>
//                 </div>
//                 <div className="message__audio-wave">
//                     <img src={waveSvg} alt="Wave svg"/>
//                 </div>
//                 <span className="message__audio-duration">
//           {convertCurrentTime(currentTime)}
//         </span>
//             </div>
//         </div>
//     );
// };

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

                         // avatar,
                     user,

                     // date,
                     // audio,
                     // isMe,
                     // isReaded,
                     // attachments,
                     // isTyping,
                     // onRemoveMessage
                 }) => {

// const isMe = () =>{
//     if (messages.author._id === user._id) {
//         return true
//     } else {
//         return false
//     }
// }


    return (

                <div
                //     className={classNames("message", {
                //         "message--isme": isMe,
                //         "message--is-typing": isTyping,
                //         "message--is-audio": audio,
                //         "message--image": attachments && attachments.length === 1
                //     })}
                >
                    {messages.map(() => (

                        <div className="message__content">
                            {/*<IconReaded*/}
                            {/*    isMe={true}*/}
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
                                <Avatar user={messages.author}/>

                            </div>
                            <div className="message__info">
                            {/*    {(audio || text || isTyping) && (*/}
                            <div className="message__bubble">
                                {messages.text &&
                                <p className="message__text">{messages.text}</p>
                                }
                                {/*                }*/}
                                {/*                {isTyping && (*/}
                                {/*                    <div className="message__typing">*/}
                                {/*                        <span />*/}
                                {/*                        <span />*/}
                                {/*                        <span />*/}
                                {/*                    </div>*/}
                                {/*                )}*/}
                                {/*                {audio && <MessageAudio audioSrc={audio} />}*/}
                            </div>
                            {/*        )}*/}

                            {/*        {attachments && (*/}
                            {/*            <div className="message__attachments">*/}
                            {/*                {attachments.map((item, index) => (*/}
                            {/*                    <div key={index} className="message__attachments-item">*/}
                            {/*                        <img src={item.url} alt={item.filename} />*/}
                            {/*                    </div>*/}
                            {/*                ))}*/}
                            {/*            </div>*/}
                            {/*        )}*/}

                                    {messages.createdAt && (
                                        <span className="message__date">
                              <Time date={messages.createdAt} />
                            </span>
                                    )}
                                </div>
                        </div>
                    ))
                    }
                </div>

    )
}


MessagesNew.defaultProps = {
    messages: [{
        text:PropTypes.string,
        author: {
            fullName:PropTypes.string,
            _id:PropTypes.string,

        }
    }]


};

// MessagesNew.propTypes = {
//     // avatar: PropTypes.string,
//     text: PropTypes.string,
//     // date: PropTypes.string,
//     // user: PropTypes.string,
//     // attachments: PropTypes.array,
//     // isMe: PropTypes.bool,
//     // isReaded: PropTypes.bool,
//     // isTyping: PropTypes.bool,
//     // audio: PropTypes.string,
// };

export default MessagesNew;