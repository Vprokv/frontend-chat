import React, {useEffect, useState} from "react";
import io from "socket.io-client"

const Socket = ({
                    onNewMessage,
                    onRemoveMessage,
                    onNewDialog,
                    onRemoveDialog,
                    // onNewUserMeta,
                    onNewMeta,
                    setSocketConnectedStatus,
                }) => {


    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io(window.location.origin.replace('3000', '3001'), {query: {token: window.localStorage.token}}))
        setSocketConnectedStatus()
        return setSocketConnectedStatus
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (socket) {
            socket.on("SERVER:NEW_DIALOG", onNewDialog);
            return () => socket.removeListener("SERVER:NEW_DIALOG", onNewDialog)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }

    }, [socket])

    // useEffect(() => {
    //     if (socket) {
    //         socket.on("SERVER:NEW_USER_META", onNewUserMeta);
    //         return () => socket.removeListener("SERVER:NEW_USER_META", onNewUserMeta)
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }
    //
    // }, [socket])

    useEffect(() => {
        if (socket) {
            socket.on("SERVER:NEW_META", onNewMeta);
            return () => socket.removeListener("SERVER:NEW_META", onNewMeta)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }

    }, [socket])

    useEffect(() => {
        if (socket) {
            socket.on("SERVER:NEW_MESSAGE", onNewMessage);
            return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [socket])

    useEffect(() => {
        if (socket) {
            socket.on("SERVER:MESSAGE_DELETED", onRemoveMessage);
            return () => socket.removeListener("SERVER:MESSAGE_DELETED", onRemoveMessage);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [socket])

    useEffect(() => {
        if (socket) {
            socket.on("SERVER:DIALOG_DELETED", onRemoveDialog);
            return () => socket.removeListener("SERVER:DIALOG_DELETED", onRemoveDialog);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [socket])

    return null

};

export default Socket;

