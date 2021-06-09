import React, {useEffect, useState} from 'react';
// import { loadDialogsList, loadMessages, loadDialogsMeta } from './api'

import {Messages, ChatInput, Header, Sidebar, Meta, Socket} from "./components";
import {EllipsisOutlined} from '@ant-design/icons';


import "./Chat.scss";


const Chat = () => {
    const [isSocketConnected, setSocketConnectedStatus] = useState(false)
    const [messages] = useState({})

    const [dialogs, setDialogs] = useState([])
    const [currentDialog, setCurrentDialog] = useState("")

    const [dialogsMeta] = useState()


    useEffect(() => {
        if (isSocketConnected) {
            (async () => {
                // setDialogs(await loadDialogsList())
            })()
        }
    }, [isSocketConnected])

    return (
    <section className="home ">
        <div className="chat">
            <Sidebar
                dialogs={dialogs}
                dialogsMeta={dialogsMeta}
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
            />
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div/>
                    <Header online/>
                    <EllipsisOutlined style={{fontSize: "22px"}}/>
                </div>
                <Messages messages={messages}  className="chat__dialog-messages"/>
                <div className="chat__dialog-input">
                    <ChatInput/>
                </div>
                <Socket onSocketConnectedStatus={setSocketConnectedStatus}/>
                <Meta/>
            </div>
        </div>
    </section>
)};


export default Chat;
