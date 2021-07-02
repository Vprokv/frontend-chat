import React, {useCallback, useEffect, useState} from 'react';
import {Empty} from "antd";

import {getDialog, getDialogMeta, getMessages, getUserMeta} from "./Api"
import {SidebarNew, HeaderNew, MessagesNew, Socket, ChatInput }from "./componentsNew"

// import ChatInput from "./componentsNew/ChatInput/ChatInput"
import "./Chat.scss";


const Chat = () => {
    const [socketConnected, setSocketConnectedStatus] = useState(true)
    const [messages, setMessages] = useState([])
    const [dialogs, setDialogs] = useState([])
    const [dialogsMeta, setDialogsMeta] = useState({})
    const [userMeta, setUserMeta] = useState({})
    const [currentDialog, setCurrentDialog] = useState("")

    const onNewMessage = useCallback(({newMessage, dialog_id}) => {
        console.log(newMessage)
        setMessages((prevMessages) => ({
            ...prevMessages,
            [dialog_id]: [...prevMessages[dialog_id], newMessage]
        }))
    }, [])

    const onRemoveMessage = useCallback(({message_id, dialog_id}) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [dialog_id]: [...prevMessages[dialog_id]]
                .splice(
                    prevMessages[dialog_id].findIndex(({_id})=>message_id===_id),
                    1
                )
        }))
    }, [])

    const onNewDialog = useCallback((dialog) => {

        setDialogs((prevDialogs) => [...prevDialogs, dialog])}, [])

    const onRemoveDialog = useCallback(({dialog_id}) => {
        setDialogs((prevDialogs) => [...prevDialogs]
                .splice(
                    prevDialogs.findIndex(({_id})=>dialog_id===_id),
                    1)
        )}, [])


    useEffect(() => {
        if (socketConnected) {
            (async () => {
                setDialogs(await getDialog())
            })()
        }
    }, [socketConnected])


    useEffect(() => {
        if (currentDialog) {
            (async () => {
                setMessages(await getMessages(currentDialog))
            }) ()
        }
    }, [currentDialog])


    useEffect(() => {
        if (socketConnected) {
            (async () => {
                setDialogsMeta(await getDialogMeta())

            })()
        }
    }, [socketConnected])

    useEffect(() => {
        if (socketConnected) {
            (async () => {
                setUserMeta(await getUserMeta())

            })()
        }
    }, [socketConnected])



    return (
    <section className="home chat">
            <SidebarNew
                dialogs={dialogs}
                dialogsMeta={dialogsMeta}
                userMeta={userMeta}
                setUserMeta={setUserMeta}
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
            />
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <HeaderNew
                        dialogs={dialogs}
                        currentDialog={currentDialog}
                    />
                </div>
                {!currentDialog ?
                    <Empty description="Откройте диалог"/> :
                    <>
                        <div className="chat__dialog-messages">
                            <MessagesNew
                                messages={messages}

                            />
                        </div>
                        <ChatInput
                            currentDialog={currentDialog}

                        />
                    </>
                }
                <Socket
                    onNewMessage={onNewMessage}
                    onRemoveMessage={onRemoveMessage}
                    onNewDialog={onNewDialog}
                    onRemoveDialog={onRemoveDialog}
                    setSocketConnectedStatus={setSocketConnectedStatus}
                />
            </div>
    </section>
)};

export default Chat;
