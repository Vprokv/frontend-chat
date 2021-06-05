import React from 'react';
import {Button, Modal, Select, Input, Form} from "antd";
import {FormOutlined, TeamOutlined} from "@ant-design/icons";
import {Dialogs} from "../../containers";
import "./Sidebar.scss"


const {Option} = Select;
const {TextArea} = Input;


const Sidebar = ({
                     user,
                     visible,
                     inputValue,
                     onShow,
                     onClose,
                     onChangeInput,
                     onSearch,
                     onSelectUser,
                     users,
                     isLoading,
                     onModalOk,
                     onChangeTextArea,
                     selectedUserId,
                     messageText
                 }) => {

    const options = users.map(
        user => (
            <Option
                key={user._id}

            >
                {user.fullName}
            </Option>
        ));

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
                <Dialogs
                    userId={user && user._id}
                />
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
                            onClick={onModalOk}
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
                                onChange={onChangeInput}
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

Sidebar.defaultProps = {
    users: []
}

export default Sidebar;