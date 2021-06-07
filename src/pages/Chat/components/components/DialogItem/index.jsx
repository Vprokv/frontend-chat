import React from 'react';
import classNames from "classnames";
import {IconReaded, Avatar} from "../../../../Auth/components/components";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"

import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import ruLocale from 'date-fns/locale/ru';
// import {addDays} from 'date-fns'


const getMessageTime = (created_at) => {
    const a= new Date(created_at)
    if (isToday(a)) {
        return format(a, "HH:mm");
    } else {
        return format(a, "MM.dd.yyyy", {
            locale: ruLocale,
        });
    }

};


const DialogItem = ({
                        _id,
                        isMe,
                        currentDialogId,
                        onSelect,
                        lastMessage,
                        partner
}) => {
  return  (
        <Link to={`/dialog/${_id}`}>
            <div

                className={classNames('dialogs__item', {
                    'dialogs__item--online': partner.isOnline,
                    'dialogs__item--selected': currentDialogId === _id
                })}
                onClick={onSelect.bind(this, _id)}
            >
                <div className="dialogs__item-avatar">
                    <Avatar user={lastMessage.user} partner={partner} />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{partner.fullName}</b>
                        <span>

                    {getMessageTime(lastMessage.createdAt)}
                </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>
                            {lastMessage.text}
                        </p>
                        {isMe && <IconReaded isMe={true} isReaded={true}/>}
                        {lastMessage.unread > 0 && <div className="dialogs__item-info-bottom-count">
                            {lastMessage.unread > 9 ? "+9" : lastMessage.unread}
                        </div>}
                    </div>
                </div>
            </div>
        </Link>
    )
};


DialogItem.propTypes = {
    lastMessage: PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        unread: PropTypes.bool.isRequired,
        }
    )
}





export default DialogItem;