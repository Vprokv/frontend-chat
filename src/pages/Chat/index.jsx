import React, {useCallback, useEffect, useState} from 'react';
import {Empty} from "antd";

import {getDialog, getDialogMeta, getMessages, getUserMeta} from "./Api"
import {SidebarNew, HeaderNew, MessagesNew, Socket }from "./componentsNew"

import {ChatInput }from "../Chat/components/index"
import "./Chat.scss";


const Chat = () => {
    const [socketConnected, setSocketConnectedStatus] = useState(true)
    const [messages, setMessages] = useState([])
    const [dialogs, setDialogs] = useState([])
    const [dialogsMeta, setDialogsMeta] = useState({})
    const [userMeta, setUserMeta] = useState({})
    const [currentDialog, setCurrentDialog] = useState("")

    const onNewMessage = useCallback(({message, dialogId}) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [dialogId]: [...prevMessages[dialogId], message]
        }))
    }, [])

    const onRemoveMessage = useCallback(({messageId, dialogId}) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [dialogId]: [...prevMessages[dialogId]]
                .splice(
                    prevMessages[dialogId].findIndex(({_id})=>messageId===_id),
                    1
                )
        }))
    }, [])

    const onNewDialog = useCallback(({dialog}) => {
        setDialogs((prevDialogs) => [...prevDialogs, dialog])}, [])

    const onRemoveDialog = useCallback(({ dialogId}) => {
        setDialogs((prevDialogs) => [...prevDialogs]
                .splice(
                    prevDialogs.findIndex(({_id})=>dialogId===_id),
                    1)
        )}, [])


    useEffect(() => {
        if (socketConnected) {
            (async () => {
                setDialogs(await getDialog())
            })()
        }
    }, [socketConnected])

    console.log(dialogs)

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
                    currentDialog={currentDialog}
                    onNewMessage={onNewMessage}
                    onRemoveMessage={onRemoveMessage}
                    onNewDialog={onNewDialog}
                    onRemoveDialog={onRemoveDialog}
                    setSocketConnectedStatus={setSocketConnectedStatus}

                />
            </div>
    </section>
)};
SidebarNew.defaultProps = {
    dialogs: {},
}

export default Chat;
