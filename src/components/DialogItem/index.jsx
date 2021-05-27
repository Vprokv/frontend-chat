import React from 'react';
import classNames from "classnames";
import {IconReaded, Avatar} from "../";
import {Link} from 'react-router-dom'


import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import ruLocale from 'date-fns/locale/ru'




const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at))) {
        return format(created_at, "HH:mm");
    } else {
        return format(new Date(created_at), "MM.dd.yyyy", {
            locale: ruLocale,
        });
    }

};


const DialogItem = ({
                        _id,
                        unread,
                        isMe,
                        created_at,
                        text,
                        currentDialogId,
                        onSelect,
                        lastMessage
}) =>(
<Link to={`/dialog/${_id}`}>
    <div

        className={classNames('dialogs__item' , {
            'dialogs__item--online': lastMessage.user.isOnline,
            'dialogs__item--selected': currentDialogId===_id
        })}
        onClick={onSelect.bind(this, _id)}
    >
        <div className="dialogs__item-avatar">
            <Avatar user={lastMessage.user}/>
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{lastMessage.user.fullName}</b>
                <span>

                    {getMessageTime(lastMessage.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {lastMessage.text}
                </p>
                {isMe && <IconReaded isMe={true} isReaded={true}/>}
                {lastMessage.unread>0 && <div className="dialogs__item-info-bottom-count">
                    {lastMessage.unread>9? "+9":lastMessage.unread}
                </div>}
            </div>
        </div>
    </div>
</Link>
);







export default DialogItem;