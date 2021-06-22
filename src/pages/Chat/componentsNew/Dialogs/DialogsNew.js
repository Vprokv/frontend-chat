import React from 'react';
import {Avatar} from "../../components/components";
import classNames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './DialogsNew.scss';
import MessageTime from "./getMessageTime"
const DialogsNew = ({
                        dialog,
                        meta,
                        currentDialog,
                        onSelect
                    }) => {


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
                    {meta.lastMessage.createdAt &&
                    <MessageTime
                        date={meta.lastMessage.createdAt}
                    />
                    }
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


DialogsNew.propTypes ={
    meta: PropTypes.shape(
        {
            lastMessage: {
                _id: PropTypes.string,
                text:PropTypes.string,
                createdAt:PropTypes.string,
            },
            unread: PropTypes.string
        }
    ),
    dialog: PropTypes.shape(
        {
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
    )
}

DialogsNew.defaultProps = {
    meta: {
        lastMessage: {}
    },
    dialog: {}
};

export default DialogsNew;