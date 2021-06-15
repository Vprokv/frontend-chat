import React from 'react';
import orderBy from "lodash/orderBy";
import {Avatar, DialogItem, IconReaded} from "../../components/components";
import {Empty} from "antd";
import classNames from "classnames";
import {Link} from "react-router-dom";
import isToday from "date-fns/isToday";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import PropTypes from "prop-types";
import './DialogsNew.scss';

const DialogsNew = ({
                        dialog,
                        meta,
                        currentDialog,
                        onSelect
                    }) => {

    const getMessageTime = (createdAt) => {
        const a = new Date(createdAt)
        if (isToday(a)) {
            return format(a, "HH:mm");
        } else {
            return format(a, "MM.dd.yyyy", {
                locale: ruLocale,
            });
        }

    };


    return (
        <Link to={`/dialog/${dialog._id}`}>
            <div
                className={classNames('dialogs__item', {
                    'dialogs__item--online': dialog.partner.isOnline,
                    'dialogs__item--selected': currentDialog === dialog._id
                })}
                onClick={onSelect.bind(this, dialog._id)}
            >
                <div className="dialogs__item-avatar">
                    <Avatar
                        user={dialog.partner}
                    />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{dialog.partner.fullName}</b>
                        <span>
                    {/*{getMessageTime(meta.lastMessage.createdAt)}*/}
                </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>
                            {meta.lastMessage.text}
                        </p>

                        {/*{isMe && <IconReaded isMe={true} isReaded={true}/>}*/}
                        {meta.unread > 0 && <div className="dialogs__item-info-bottom-count">
                            {meta.unread > 9 ? "+9" : meta.unread}
                        </div>}
                    </div>
                </div>
            </div>
        </Link>
    );
};
DialogsNew.defaultProps = {
    meta: {
        lastMessage: {
            _id: PropTypes.string,
            text:PropTypes.string,
            createdAt:PropTypes.string,
        },
        unread: PropTypes.string
    },
    dialog: {
        _id: PropTypes.string,
        partner: {
            _id: PropTypes.string,
            fullName:PropTypes.string,
        },
        author: {
            _id: PropTypes.string,
            fullName:PropTypes.string,
        },
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
    }
};

export default DialogsNew;