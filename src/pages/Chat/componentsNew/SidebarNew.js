import React, {useState} from 'react';
import {Button, Form, Input, Modal, Select} from "antd";
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import DialogsNew from "./Dialogs/DialogsNew";

import {findUsers, createDialog} from "../Api";
import {connect} from "react-redux";

const {Option} = Select;
const {TextArea} = Input;


const SidebarNew = ({
                        dialogs,
                        dialogsMeta,
                        setCurrentDialog,

}) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessageText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);

    const options = users.map(
        user => (
            <Option
                key={user._id}
            >
                {user.fullName}
            </Option>
        ));


    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true)
    };

    const onSearch = async (value) => {
        setIsLoading(true);
        try {
            await findUsers(value)
            setIsLoading(false)
            return ({data}) => {
                setUsers(data)
            }
        } catch (e) {
            setIsLoading(false);
            return "Пользователь не найден"
        }
    };

    const onAddDialog = async () => {
        try {
                await createDialog({
                    partner: selectedUserId,
                    text: messageText
                })
                onClose()
        } catch(e) {
            setIsLoading(false)
            return "Ошибка при создании диалога"
        }
    };

    const handleChangeInput = (value) => {
        setInputValue(value)
    };

    const onChangeTextArea = e => {
        setMessageText(e.target.value)
    }

    const onSelectUser = userId => {
        setSelectedUserId(userId)
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
            <div className="dialogs__search">
                <Input
                    placeholder="Поиск среди контактов"
                    onChange={e => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>

            <div className="chat__sidebar-dialogs">

                {dialogs.map((dialog) => (
                    <DialogsNew
                        dialog={dialog}
                        meta={dialogsMeta[dialog._id]}
                        onClick={() => setCurrentDialog(dialog._id)}
                        onSelect={setCurrentDialog}
                    />
                ))
                }

                <Modal
                    title="Создать диалог"
                    visible={visible}
                    footer={[
                        <Button
                            key="back"
                            onClick={onClose}
                        >
                            Закрыть
                        </Button>,
                        <Button
                            disabled={!messageText}
                            key="submit"
                            type="primary"
                            loading={isLoading}
                            onClick={onAddDialog}
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
                                value={inputValue}
                                onSearch={onSearch}
                                onChange={handleChangeInput}
                                onSelect={onSelectUser}
                                notFoundContent={null}
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={false}
                                showSearch
                            >
                                {options}
                            </Select>
                        </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
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
    setCurrentDialog : "",
    users: []
}


export default connect((({user}) => ({user: user.data}))
)(SidebarNew);