import React from 'react';
// import {Status as StatusBase} from "../../Chat/components/components";
import {connect } from 'react-redux'


const ChatInputCont = ({currentDialogId, user, dialogs}) => {
    console.log(dialogs)
    console.log(user)
    if (!dialogs.length || !currentDialogId) {
        return null;
    }

    const currentDialogObj = dialogs.filter(dialog => dialog._id === currentDialogId)[0];
    let partner = {};

    const a = () => {
        console.log(currentDialogObj)
    }
    a()

    if (currentDialogObj.author._id === user._id) {

        partner = currentDialogObj.partner;
    } else {
        partner = currentDialogObj.author;

    }


    // return (<StatusBase
    //     online={partner.isOnline}
    //     fullName={partner.fullName}
    // />

    // )

};

export default connect(({ dialogs, user }) => ({
    dialogs: {dialogs},
    currentDialogId: dialogs.currentDialogId,
    user: user.data
}))(ChatInputCont);