import React from 'react';
import PropTypes from 'prop-types';

import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Empty, Popover} from "antd";
import {removeDialogById} from "../../Api";

const HeaderNew = ({
                       dialogs,
                       currentDialog,
                       userMeta
}) => {
    if (!dialogs || !currentDialog) {
        return null;
    }
    const currentDialogObj = dialogs.filter(dialog => dialog._id_dialog === currentDialog)[0];
    // const online = (currentDialogObj.partner.isOnline === true) ? true : "";

    const RemoveDialog = async (id) => {
        if (window.confirm("Вы действительно хотите удалить сообщение")) {
            await removeDialogById(id)
        }
    };

    return (
        <>
        {currentDialogObj?
        <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">
                    {userMeta[currentDialog].fullname}
                </b>

            <span
                // className={online === true ? "status--online" : "status"}
            >
                {/*{online === true ? "онлайн" : "офлайн"}*/}
            </span>
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
    }
};

export default HeaderNew;