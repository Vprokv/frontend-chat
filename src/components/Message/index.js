import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru'

const Message = ({avatar, user, text, date}) => (
    <div className="message">
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullName}`}/>
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">
                    {text}
                </p>
            </div>
            <span
                className="message__date">
                {formatDistanceToNow(date, { addSuffix: true, locale:ru }) }
            </span>

        </div>
    </div>
)

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.string,
};

export default Message;