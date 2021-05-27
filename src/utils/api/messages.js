import {axios} from '../../core';

export default {
    getAllByDialogId: id => axios.get("/messages?dialog=" + id),
    send: (text, dialogId) =>
        axios.post("/massages", {
            text: text,
            dialog_id: dialogId
        })

};