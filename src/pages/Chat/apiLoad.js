import {
    getDialog,
    getDialogMeta,
    getMessages}
    from './api'


    const loadDialogsList = () => {
        return (
            getDialog()
        )
    };

    // const loadMessages = () => {
    //     return (
    //         getMessages()
    //     )
    //
    // } ;
    //
    // const loadDialogsMeta = () => {
    //     return (
    //         getDialogMeta()
    //     )
    //
    // } ;




export default {loadDialogsList} ;