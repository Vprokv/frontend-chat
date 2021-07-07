import React, {useCallback, useEffect, useState} from 'react';
import {Empty} from "antd";

import {getDialog, getDialogMeta, getMessages, getUserMeta} from "./Api"
import {SidebarNew, HeaderNew, MessagesNew, Socket, ChatInput }from "./componentsNew"
import "./Chat.scss";


const Chat = () => {
    const [socketConnected, setSocketConnectedStatus] = useState(false)
    const [messages, setMessages] = useState([])
    const [dialogs, setDialogs] = useState([])
    const [dialogsMeta, setDialogsMeta] = useState({})
    const [userMeta, setUserMeta] = useState({})
    const [currentDialog, setCurrentDialog] = useState("")

    const onNewMessage = useCallback((newMessage) => {
        setMessages((prevMessages) => {
            return({
            ...prevMessages,
            [newMessage.dialog_id]: [...prevMessages[newMessage.dialog_id], newMessage]
        })})
    }, [])

    const onRemoveMessage = useCallback(({message_id, dialog_id}) => {

        setMessages((prevMessages) => {
            const nextMessages = [...prevMessages[dialog_id]]
            nextMessages.splice(
                prevMessages[dialog_id].findIndex(({_id}) => message_id === _id),
                1
            )
            return ({
                    ...prevMessages,
                    [dialog_id]: nextMessages
                })
            }
        )
    }, [])

    const onNewDialog = useCallback((dialog) => {
        setDialogs((prevDialogs) => {

                return (
                    [...prevDialogs, dialog]
                )
            }
        )
    }, [])
    console.log(dialogs)

    // const onNewUserMeta = useCallback((userMeta) => {
        // console.log(userMeta)
        // const userMetaObj = userMeta.reduce((acc, current) => {
        //     const key= current._id_dialog;
        //     return {
        //         ...acc,
        //         [key]:current
        //     }
        // }, {})
        // console.log(userMetaObj)
        // setUserMeta((setUserMeta) => {
        //
        //         return ({
        //             ...setUserMeta, userMetaObj
        //         })
        //     }
        // )
    //     return null
    // }, [])

    const onNewMeta = useCallback((dialogMeta) => {
        setDialogsMeta((prevDialogsMeta) => {
            return({
                ...prevDialogsMeta,
                [dialogMeta.dialog_id]: dialogMeta
            })})
    }, [])

    const onRemoveDialog = useCallback(({dialog_id}) => {

        setDialogs((prevDialogs) => {
                const nexDialogs = [...prevDialogs]
                nexDialogs.splice(
                    prevDialogs.findIndex(({_id_dialog}) => Number(dialog_id)=== _id_dialog),
                    1
                )
                return (
                    nexDialogs
                )
            }
        )
    }, [])

    const SocketStatus = useCallback(() => {
        setSocketConnectedStatus((prevStatus) => !prevStatus)
    }, [])

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
                const newMessages = await getMessages(currentDialog)
                setMessages((prevMessages) => ({
                        ...prevMessages,
                        [currentDialog]: newMessages
                    })
                )
            })()
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
                        userMeta={userMeta}
                    />
                </div>
                {!currentDialog ?
                    <Empty description="Откройте диалог"/> :
                    <>

                            <MessagesNew
                                messages={messages[currentDialog]}

                            />

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
                    // onNewUserMeta={onNewUserMeta}
                    onNewMeta={onNewMeta}
                    setSocketConnectedStatus={SocketStatus}
                />
            </div>
    </section>
)};

export default Chat;
