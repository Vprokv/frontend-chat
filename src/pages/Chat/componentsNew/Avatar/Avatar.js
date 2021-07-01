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
                alt={`Avatar ${user.fullName}`}
            />
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user.id_user+"f78fdb18bf39b23d42313edfaf7e0a44");

        return (
        <div
            style={{
                background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
            }}
            className="avatar avatar--symbol"
        >
            {upperCase(user.name)}
        </div>)
    }
};

Avatar.defaultProps = {
    user: {
        fullName:PropTypes.string,
        avatar: {},
    },
};



export default Avatar;