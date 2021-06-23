import React, {useCallback, useEffect, useState} from 'react';
import {Empty} from "antd";

// import {getDialog, getDialogMeta, getMessages} from "./apiFake"
import {getDialog, getDialogMeta, getMessages} from "./Api"
import {SidebarNew, HeaderNew, MessagesNew, Socket }from "./componentsNew"

import {ChatInput }from "../Chat/components/index"
import "./Chat.scss";


const Chat = () => {
    const [isSocketConnected, setSocketConnectedStatus] = useState(false)
    const [messages, setMessages] = useState({})
    const [dialogs, setDialogs] = useState([])
    const [dialogsMeta, setDialogsMeta] = useState({})
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

    // const onUpdateMeta = useCallback(({message, dialogId}) => {
    //     setDialogsMeta((prevMessages) => ({
    //             ...prevMessages,
    //             [dialogId]: [...prevMessages[dialogId].splice(0, 1), message],
    //         })
    //     )
    // }, [])


    useEffect(() => {
        if (isSocketConnected) {
            (async () => {
                setDialogs(await getDialog())
            })()
        }
    }, [isSocketConnected])

    useEffect(() => {
        if (currentDialog && !messages[currentDialog]) {
            (async () => {
                setMessages(await getMessages())
            }) ()
        }
    }, [currentDialog, messages])

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
                    onNewMessage={onNewMessage}
                    onRemoveMessage={onRemoveMessage}
                    onNewDialog={onNewDialog}
                    onRemoveDialog={onRemoveDialog}

                />
            </div>
    </section>
)};


export default Chat;
