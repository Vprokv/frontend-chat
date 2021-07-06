import {axios} from './core';

export const create = (postData) => axios.post("/user/signUp", postData)
export const login = (postData) => axios.post("/user/signIn", postData)

export const getMe = async () => {
    const {data} = await axios.get("/user/me")
    return data
}

export const getDialogMeta = async() => {
    const {data} = await axios.get("dialogs/meta")
    return data
}

export const getUserMeta = async() => {
    const {data} = await axios.get("/user/meta")
    return data
}

export const getDialog = async () => {
    const {data} = await axios.get("/dialogs")
    return data
}
export const getMessages = async (dialogId) => {
    const {data} = await axios.get("/messages?dialog_id=" + dialogId)
    return data
}
export const createDialog = ({partner_id, name}) => axios.post("/dialogs", {partner_id, name})

export const removeDialogById = dialog_id => axios.delete("/dialogs/" + dialog_id)
export const sendMessage = (text, dialog_id) => axios.post("/messages", {text, dialog_id})
export const removeMessageById = message_id => axios.delete("/messages/" + message_id)
export const findUsers = async (query) => {
    const {data} = await axios.get("/user/find",{params:{query}})
    return data
}



