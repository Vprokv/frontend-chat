import React, {useEffect} from "react";
import socket from "../core/socket";


const Socket = ({
                    fetchDialogs,
                    setSocketConnectedStatus,
                    items,
                    onSocketConnectedStatus
                }) => {

    // useEffect(() => {
    //
    //
    //     socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    //     return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
    // }, []);



    // useEffect(() => {
    //     if (currentDialogId) {
    //
    //         fetchMessages(currentDialogId);
    //     }
    //
    //     socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    //
    //     return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    // }, [currentDialogId]);
    //
    // useEffect(() => {
    //     messagesRef.current.scrollTo(0, 999999);
    // }, [items]);


    useEffect(()=>{
        onSocketConnectedStatus(true)
    }, [onSocketConnectedStatus])
return null

};

export default Socket;

