import {axios} from '../../core';

export default {
    signIn: (postData) => axios.post("/user/signIn", postData),
    signUp: (postData) => axios.post("/user/signUp", postData),
    verifyHash: hash => axios.get("/user/verify?hash=" + hash),
    getMe: () => axios.get("/user/me"),
    getMeta: ()=>axios.get("/meta"),
    getDialog: ()=>axios.get("/dialogs"),
    getMessages: messageId или message._id => axios.get("/messages?dialog=" + messageId),
    createDialog: ({partner, text})=>axios.post("/dialogs", {partner, text}),
    removeDialogById: dialogId=>axios.delete("/dialogs/id="+ dialogId),
    sendMessage: (text, dialog) =>
        axios.post("/messages", {
            text: text,
            dialog
        }),
    removeMessageById: messageId => axios.delete("/messages?id=" + messageId),
    findUsers: (query)=> axios.get("user/find?=" + query)
};