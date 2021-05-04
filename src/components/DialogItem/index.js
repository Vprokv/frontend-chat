import React from 'react';
import classNames from "classnames";
import {IconReaded, Avatar} from "../";

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
                        user,
                        unread,
                        isMe,
                        created_at,
                        text,
                        currentDialogId,
                        onSelect
}) =>(
    <div
        className={classNames('dialogs__item' , {
            'dialogs__item--online': user.isOnline,
            'dialogs__item--selected': currentDialogId===_id
        })}
        onClick={onSelect.bind(this, _id)}
    >
        <div className="dialogs__item-avatar">
            <Avatar user={user}/>
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullName}</b>
                <span>
                    {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {text}
                </p>
                {isMe && <IconReaded isMe={true} isReaded={true}/>}
                {unread>0 && <div className="dialogs__item-info-bottom-count">
                    {unread>9? "+9":unread}
                </div>}
            </div>
        </div>
    </div>
);







export default DialogItem;