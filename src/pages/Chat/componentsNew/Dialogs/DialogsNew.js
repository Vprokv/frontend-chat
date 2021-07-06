import React from 'react';
import Avatar from "../Avatar/Avatar";
import classNames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './DialogsNew.scss';
import MessageTime from "./getMessageTime"
const DialogsNew = ({
                        dialog,
                        meta,
                        currentDialog,
                        onSelect,
    userMeta
                    }) => {


    return (
        <Link to={`/dialog/${dialog._id_dialog}`}>
            <div
                className={classNames('dialogs__item', {

                    'dialogs__item--selected': currentDialog === dialog._id_dialog
                })}
                onClick={onSelect.bind(this, dialog._id_dialog)}
            >
                <div className="dialogs__item-avatar">
                    {userMeta && <Avatar
                        user={userMeta}
                    />}
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        {userMeta && <b>{userMeta.fullname}</b>}
                        <span>
                    {meta.createdat &&
                    <MessageTime
                        date={meta.createdat}
                    />
                    }
                </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>
                            {meta.text}
                        </p>

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
            _id_dialog: PropTypes.string,
            partner: {
                _id: PropTypes.string,
                fullName:PropTypes.string,
            },
            author: {
                _id: PropTypes.string,
                fullName:PropTypes.string,
            },
        }
    )
}

DialogsNew.defaultProps = {
    meta: {
        lastMessage: {
            _id: "",
            text: "",
            createdAt: "",
        }
    },
    dialog: {
        _id: "",
        partner: {
            _id: "",
            fullName: "11",
            isOnline: true,

        },
        author: {
            _id: "",
            fullName: "",
        }
    }
};

export default DialogsNew;