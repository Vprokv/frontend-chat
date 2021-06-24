import React from 'react';
import PropTypes from 'prop-types';

import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Popover} from "antd";
import {removeDialogById} from "../../Api";

const HeaderNew = ({
                       dialogs,
                       currentDialog,

}) => {
    if (!dialogs || !currentDialog) {
        return null;
    }
    const currentDialogObj = dialogs.filter(dialog => dialog._id === currentDialog)[0];

    const online = (currentDialogObj.partner.isOnline === true) ? true : ""



    const RemoveDialog = async (dialog) => {
        if (window.confirm("Вы действительно хотите удалить сообщение")) {
            await removeDialogById(dialog._id)
        }
    }

    return (
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">
                {currentDialogObj.partner.fullName}
            </b>
            <span
                className={online === true ? "status--online" : "status"}
            >
                {online === true ? "онлайн" : "офлайн"}
            </span>
            <Popover
                content={
                    <Button
                        onClick={RemoveDialog}>
                        Удалить текущий диалог
                    </Button>
                }>
                <Button
                    className="button">
                    <EllipsisOutlined style={{fontSize: "22px"}}/>
                </Button>
            </Popover>
        </div>

    )
};


HeaderNew.defaultProps = {
    dialogs: {
        partner: {
            _id: PropTypes.string,
            fullName: PropTypes.string,
            isOnline: PropTypes.bool,
        },
    }
};

export default HeaderNew;