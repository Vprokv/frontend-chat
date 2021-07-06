import React, {useState} from 'react';
import {Button, Form, Input, Modal, Select} from "antd";
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import DialogsNew from "./Dialogs/DialogsNew";
import {findUsers, createDialog} from "../Api";


const {Option} = Select;
const {TextArea} = Input;


const SidebarNew = ({
                        dialogs,
                        dialogsMeta,
                        setCurrentDialog,
                        userMeta,
                    }) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [headerText, setHeaderText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const options = users.map(function (user) {
        const {_id, fullname} = user

        return <Option
            key={_id}
        >
            {fullname}
        </Option>
    })

    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true)
    };

    const onSearch = async (value) => {
        setIsLoading(true);
        try {
           const data = await findUsers(value)
            setUsers(data)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false);
            return "Пользователь не найден"
        }

    };


    const onAddDialog = async () => {
        try {
                await createDialog({
                    partner_id: inputValue,
                    name: headerText
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
        setHeaderText(e.target.value)
    }



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
                        meta={dialogsMeta[dialog._id_dialog]}
                        userMeta={userMeta[dialog._id_dialog]}
                        onClick={() => setCurrentDialog(dialog._id_dialog)}
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
                            disabled={!headerText}
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
                                notFoundContent={null}
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={false}
                                showSearch
                            >
                                {options}
                            </Select>
                        </Form.Item>
                    { (
                        <Form.Item label="Введите название диалога">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 5 }}
                                onChange={onChangeTextArea}
                                value={headerText}
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
    dialog: {
        id_dialog: ""
    },
    meta: {},
    currentDialog: "",
    setCurrentDialog : "",
    users: []
}


export default SidebarNew;