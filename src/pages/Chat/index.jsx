import React, {useEffect, useState} from 'react';



import {getDialog, getDialogMeta, getMessages} from "./api"


import {SidebarNew, HeaderNew, MessagesNew, Socket }from "./componentsNew"

import {EllipsisOutlined} from '@ant-design/icons';


import "./Chat.scss";


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
            {/*<div className="chat__dialog">*/}
            {/*    <div className="chat__dialog-header">*/}
            {/*        <br/>*/}
                    {/*<HeaderNew*/}
                    {/*    online*/}
                    {/*/>*/}
                {/*    <EllipsisOutlined style={{fontSize: "22px"}}/>*/}
                {/*</div>*/}
                <MessagesNew
                    className="chat__dialog-messages"
                    messages={messages[currentDialog]}
                    currentDialog={currentDialog}
                    />
            {/*        <ChatInput*/}
            {/*            className="chat__dialog-input"*/}
            {/*        />*/}
                <Socket
                    onSocketConnectedStatus={setSocketConnectedStatus}
                />
            {/*    <Meta/>*/}
            {/*</div>*/}
    </section>
)};


export default Chat;
