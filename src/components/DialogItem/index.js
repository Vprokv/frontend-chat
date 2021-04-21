import React from 'react';
import classNames from "classnames";
import {IconReaded} from "../"
import './DialogItem.scss';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'



const getMessageTime= created_at=>{
    if (isToday(created_at)) {
        return format(
            created_at,
            'HH:mm'
        );
    } else {
        return format(
            created_at,
            'DD.MM.YY'
        );
    }
};

const getAvatar = avatar=> {
    if (avatar) {
        return (
            <img
                src="https://source.unsplash.com/100x100/?random1&nature,water"
                alt=""
            />
        );
    } else {

    }
};

const DialogItem = ({user, unreaded, isMe, created_at, text}) =>(
    <div
        className={classNames('dialogs__item' , {
            'dialogs__item-online': user.isOnline
        })}
    >
        <div className="dialogs__item-avatar">
            {/*<img src={user.avatar} alt={`${user.fullName} avatar`}/>*/}
            {getAvatar(user.avatar)}

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
                {unreaded>0 && <div className="dialogs__item-info-bottom-count">
                    {unreaded>9? "+9":unreaded}
                </div>}
            </div>
        </div>
    </div>
);







export default DialogItem;