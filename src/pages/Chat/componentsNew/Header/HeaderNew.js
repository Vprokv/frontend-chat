import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Header.scss';

const HeaderNew = ({dialogs, currentDialog}) => {
    if (!dialogs || !currentDialog) {
        return null;
    }
    const currentDialogObj = dialogs.filter(dialog => dialog._id === currentDialog)[0];

    const online = (currentDialogObj.partner.isOnline === true) ? true : false

    console.log(online)
    return(
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">
                {currentDialogObj.partner.fullName}
            </b>
            <div className="chat__dialog-header-status">
            <span
                className={classNames("status", {"status--online": online===true})}>
            {online===true ? 'онлайн' : "офлайн"}
                            </span>
            </div>
        </div>

    )
};


HeaderNew.defaultProps = {
    dialogs: {
        partner: {
            _id: PropTypes.string,
            fullName: PropTypes.string,
            isOnline: PropTypes.bool,
        },
    }
};

export default HeaderNew;