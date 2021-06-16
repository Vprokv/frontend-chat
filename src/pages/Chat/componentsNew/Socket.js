import React, {useEffect} from "react";
import socket from "../core/socket";


const Socket = ({
                    fetchDialogs,
                    setSocketConnectedStatus,
                    items,
                    currentDialog,
                    onSocketConnectedStatus
                }) => {

    // useEffect(() => {
    //
    //
    //     socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    //     return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
    // }, []);



    // useEffect(() => {
    //     if (currentDialog) {
    //
    //         fetchMessages(currentDialog);
    //     }
    //
    //     socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    //
    //     return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    // }, [currentDialog]);
    //
    // useEffect(() => {
    //     messagesRef.current.scrollTo(0, 999999);
    // }, [items]);


    useEffect(() => {
        onSocketConnectedStatus(true)
    }, [onSocketConnectedStatus])
    return null

};

export default Socket;

