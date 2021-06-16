import React, {useEffect, useState} from 'react';



import {getDialog, getDialogMeta, getMessages} from "./api"


import {SidebarNew, HeaderNew, MessagesNew, Socket }from "./componentsNew"
import {ChatInput }from "../Chat/components/index"

import {EllipsisOutlined} from '@ant-design/icons';


import "./Chat.scss";
import {Empty} from "antd";


const Chat = () => {
    const [isSocketConnected, setSocketConnectedStatus] = useState(false)
    const [messages, setMessages] = useState({})
    const [dialogs, setDialogs] = useState([])
    const [dialogsMeta, setDialogsMeta] = useState({})
    const [currentDialog, setCurrentDialog] = useState("")



    useEffect(() => {
        if (isSocketConnected) {
            (async () => {
                setDialogs(await getDialog())
            })()
        }
    }, [isSocketConnected])

    useEffect(() => {
        if (currentDialog) {
            (async () => {
                setMessages(await getMessages())
            }) ()
        }
    }, [currentDialog])

    useEffect(() => {
        if (isSocketConnected) {
            (async () => {
                setDialogsMeta(await getDialogMeta())
            })()
        }
    }, [isSocketConnected])


    return (
    <section className="home chat">
            <SidebarNew
                dialogs={dialogs}
                dialogsMeta={dialogsMeta}
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
            />
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <br/>
                    <HeaderNew
                        dialogs={dialogs}
                        currentDialog={currentDialog}
                    />
                    <EllipsisOutlined style={{fontSize: "22px"}}/>
                </div>

                {!currentDialog ?
                    <Empty description="Откройте диалог"/> :
                    <>
                        <div className="chat__dialog-messages">
                            <MessagesNew

                                messages={messages[currentDialog]}
                            />
                        </div>


                        <ChatInput
                            currentDialog={currentDialog}
                        />
                    </>
                }
                <Socket
                    currentDialog={currentDialog}
                    onSocketConnectedStatus={setSocketConnectedStatus}
                />
            </div>
    </section>
)};


export default Chat;
