import React, {useEffect} from "react";
import socket from "../core/socket";


const Socket = ({
                    onNewMessage,
                    onRemoveMessage,
                    onNewDialog,
                    onRemoveDialog,
                    setSocketConnectedStatus,

                }) => {

    useEffect(() => {
        socket.on("SERVER:NEW_DIALOG", onNewDialog);
        return () => socket.removeListener("SERVER:NEW_DIALOG", onNewDialog)

        socket.on("SERVER:DIALOG_DELETED", onRemoveDialog);
        return () => socket.removeListener("SERVER:DIALOG_DELETED", onRemoveDialog);

        socket.on("SERVER:NEW_MESSAGE", (w)=>{console.log(1,w)});
        return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);

        socket.on("SERVER:MESSAGE_DELETED", onRemoveMessage);
        return () => socket.removeListener("SERVER:MESSAGE_DELETED", onRemoveMessage);


        setSocketConnectedStatus((prevStatus) => !prevStatus)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return null

};

export default Socket;

