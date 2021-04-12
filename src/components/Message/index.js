import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru'
import classNames from 'classnames';
import readedSvg from "../../../src/assets/img/readed.svg";
import noReadedSvg from "../../../src/assets/img/noreaded.svg";


const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => (
    <div className={classNames("message", {'message--isMe': isMe})}>
        <div className="message__content">
            {isMe && isReaded ? (
                <img
                    className="message__icon-readed"
                    src={readedSvg}
                    alt="Readed icon"
                />
            ) : (
                <img
                    className="message__icon-readed message__icon-readed--no"
                    src={noReadedSvg}
                    alt="No readed icon"
                />
            )}

            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullName}`}/>
            </div>
            <div className="message__info">
                <div className="message__bubble">
                    <p className="message__text">
                        {text}
                    </p>
                </div>
                <div className="message__attachments">
                    {
                        attachments && attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt="item.filename"/>
                            </div>

                        ))}
                </div>
                <span
                    className="message__date">
                {formatDistanceToNow(date, {addSuffix: true, locale: ru})}
            </span>
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
};

export default Message;