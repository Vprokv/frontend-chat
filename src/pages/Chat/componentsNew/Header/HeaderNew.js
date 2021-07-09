import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Empty, Popover} from "antd";
import {getFullNameForUser, removeDialogById} from "../../Api";
import {connect} from "react-redux";



const HeaderNew = ({
                       dialogs,
                       currentDialog,
                       dialogsMeta,
                       user
}) => {


    const [fullName, setFullName] = useState("");


    if (!dialogs || !currentDialog) {
        return null;
    }

    const currentDialogObj = dialogs.filter(dialog => dialog._id_dialog === currentDialog)[0];
    const {id_user} = currentDialogObj
    const currentId =id_user && id_user.filter(id => id != user._id)[0];


    const A = () => {
        if (currentId) {
            (async () => {
                const data = await getFullNameForUser(currentId)
                return setFullName(data)
            })()
        }

    }

    A()

    const RemoveDialog = async (id) => {
        if (window.confirm("Вы действительно хотите удалить сообщение")) {
            await removeDialogById(id)
        }
    };

    return (
        <>
        {currentDialog?
        <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">
                    {fullName}
                </b>
            <Popover
                content={
                    <Button
                        onClick={()=>RemoveDialog(currentDialogObj._id_dialog)}>
                        Удалить текущий диалог
                    </Button>
                }>
                <Button
                    className="button">
                    <EllipsisOutlined style={{fontSize: "22px"}}/>
                </Button>
            </Popover>
        </div> :  ""
        }
        </>
    )
};


HeaderNew.defaultProps = {
    dialogs: {
        partner: {
            _id: PropTypes.number,
            fullName: PropTypes.string,
            isOnline: PropTypes.bool,
        },
    },
    dialog: {
        _id: "",
        id_dialog: "",
        id_user: "",
        name: ""
    },
    dialogsMeta: {},
    id_user: [],
    currentDialog: ""
};

export default connect(
    ({user}) => ({user: user.data}))(HeaderNew);
// export default HeaderNew;