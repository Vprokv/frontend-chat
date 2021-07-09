import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';
import {generateAvatarFromHash, upperCase} from "../../utils/helpers";



const Avatar = ({user}) => {
    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            />
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash((user.author_id|| user.id_user)+"a78fdb18bf39b23d42313edfaf7e0a44");
        return (
        <div
            style={{
                background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
            }}
            className="avatar avatar--symbol"
        >
            {upperCase(user.fullname)}
        </div>)
    }
};

Avatar.defaultProps = {
    user: {
        fullname: "",
        avatar: {},
    },
};



export default Avatar;