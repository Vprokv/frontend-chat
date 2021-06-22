import React, {useEffect, useRef} from "react";
import socket from "../core/socket";


const Socket = ({
                    onNewMessage,
                    onRemoveMessage,
                    onNewDialog,
                    onRemoveDialog,
                    setSocketConnectedStatus,

                    onSocketConnectedStatus
                }) => {


    useEffect(() => {
        socket.on("SERVER:DIALOG_CREATED", onNewDialog);
        return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog)

        socket.on("SERVER:DIALOG_DELETED", onRemoveDialog);
        return () => socket.removeListener("SERVER:DIALOG_DELETED", onRemoveDialog);

        socket.on("SERVER:NEW_MESSAGE", onNewMessage);
        return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);

        socket.on("SERVER:MESSAGE_DELETED", onRemoveMessage);
        return () => socket.removeListener("SERVER:MESSAGE_DELETED", onRemoveMessage);

        onSocketConnectedStatus(true)

        return () => {
            onSocketConnectedStatus(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return null

};

export default Socket;

