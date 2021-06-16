import React, {useState} from 'react';
import {Button, Form, Modal, Select} from "antd";
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import DialogsNew from "./Dialogs/DialogsNew";
import MessagesNew from "./Message/MessagesNew";


const SidebarNew = ({
                        dialogs,
                        dialogsMeta,
                        currentDialog,
                        setCurrentDialog
}) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessageText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);



    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true)
    };


    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <Button
                        type="link"
                        icon={<TeamOutlined/>}
                    />

                    <span>Список диалогов</span>
                </div>
                <Button
                    onClick={onShow}
                    type="link"
                    icon={<FormOutlined/>}
                />
            </div>

            <div className="chat__sidebar-dialogs">

                {dialogs.map((dialog) => (
                    <DialogsNew
                        dialog={dialog}
                        meta={dialogsMeta[dialog._id]}
                        onClick={() => setCurrentDialog(currentDialog = dialog._id)}
                        onSelect={setCurrentDialog}
                    />
                ))
                }

                <Modal
                    title="Создать диалог"

                    footer={[
                        <Button
                            key="back"
                            onClick={onClose}
                        >
                            Закрыть
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"

                        >
                            Создать
                        </Button>
                    ]}
                >
                    <Form>
                        <Form.Item
                            label="Введите имя пользователя или E-Mail"
                        >
                            <Select
                                placeholder="Введите имя пользователя"
                                style={{width: "100%"}}
                            >

                            </Select>
                        </Form.Item>
                        {/*{selectedUserId && (*/}
                        {/*    <Form.Item label="Введите текст сообщения">*/}

                        {/*    </Form.Item>*/}
                        {/*)}*/}
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

SidebarNew.defaultProps = {
    dialogs: {},
    dialogsMeta: {},
    currentDialog: "",
    setCurrentDialog : ""
}


export default SidebarNew;