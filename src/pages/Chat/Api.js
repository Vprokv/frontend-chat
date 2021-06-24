import {axios} from './core';


export const signIn = (postData) => axios.post("/user/signIn", postData)
export const signUp = (postData) => axios.post("/user/signUp", postData)
export const verifyHash = async (hash) => {
    const {data} = await axios.get("/user/verify?hash=" + hash)
    return data
}

export const getMe = async () => {
    const {data} = await axios.get("/user/me")
    return data
}


export const getDialogMeta = async() => {
    const {data} = await axios.get("/meta")
    return data
}
export const getDialog = async () => {
    const {data} = await axios.get("/dialogs")
    return data
}
export const getMessages = async (dialogId) => {
    const {data} = await axios.get("/messages?dialog=" + dialogId)
    return data
}
export const createDialog = ({partner, text}) => axios.post("/dialogs", {partner, text})
export const removeDialogById = dialogId => axios.delete("/dialogs/id=" + dialogId)
export const sendMessage = (text, dialogId) => axios.post("/messages", {text, dialogId})
export const removeMessageById = messageId => axios.delete("/messages?id=" + messageId)
export const findUsers = async (query) => {
    const {data} = await axios.get("user/find?=" + query)
    return data
}



