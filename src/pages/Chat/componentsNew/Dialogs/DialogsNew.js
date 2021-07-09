import React, {useEffect, useState} from 'react';
import Avatar from "../Avatar/Avatar";
import classNames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './DialogsNew.scss';
import MessageTime from "./getMessageTime"
import UserCont from "../UserCont"
import {connect} from "react-redux";
import {getFullNameForUser} from "../../Api";

const DialogsNew = ({
                        dialog,
                        meta,
                        currentDialog,
                        onSelect,
                        user
                    }) => {
    const {id_user} = dialog

    const [fullName, setFullName] = useState("");
    const currentId = id_user && id_user.filter(id => id != user._id)[0];



    useEffect(() => {
        if (currentId) {
            (async () => {
                const data = await getFullNameForUser(currentId)
                return setFullName(data)
            })()


        }
    }, [id_user])

    const dataForAvatar = {
        id_user: currentId,
        fullname: fullName,
        avatar: null

    }



    return (
        <Link to={`/dialog/${dialog._id_dialog}`}>
            {/*<UserCont*/}
            {/*id_user={id_user}*/}
            {/*setFullname={setFullName}*/}
            {/*currentDialog={currentDialog}*/}
            {/*/>*/}
            <div
                className={classNames('dialogs__item', {

                    'dialogs__item--selected': currentDialog === dialog._id_dialog
                })}
                onClick={onSelect.bind(this, dialog._id_dialog)}
            >
                <div className="dialogs__item-avatar">
                    {dataForAvatar && <Avatar
                        user={dataForAvatar}
                    />}
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        {meta && <b>{fullName}</b>}
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
    },
    id_user: [],
    currentId: "",
    user: {},

};

export default connect(
    ({user}) => ({user: user.data}))(DialogsNew);
// export default DialogsNew;