import React, {useEffect, useState} from "react";
import {getFullNameForUser} from "../Api"
import {connect} from "react-redux";
import DialogsNew from "./Dialogs/DialogsNew";

const UserCont = ({
                      id_user,
                      setFullName,
                      user
                  }) => {


    // const currentId = id_user.filter(id => id != user._id)[0];
    //
    //
    // useEffect(() => {
    //     if (currentId) {
    //         (async () => {
    //             const data = await getFullNameForUser(currentId)
    //             console.log(data)
    //             return setFullName(data)
    //
    //
    //         })()
    //     }
    // }, [id_user])

    return null

}

// UserCont.defaultProps = {
//     id_user: [],
//     currentId: "",
//     user: {}
//
// }

export default connect(
    ({user}) => ({user: user.data}))(UserCont);