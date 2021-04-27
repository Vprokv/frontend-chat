import React from 'react';
import PropTypes from 'prop-types';
import {Empty} from "antd";


import {Message} from "../index";

const Messages = ({items}) => {
    return items?
        (<div>
            <Message
                avatar=
                    "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
                date={new Date('fri Apr 09 2021 08:11:54')}
                audio="https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.mp3"

            />

            <Message
                avatar=
                    "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
                date={new Date('fri Apr 09 2021 08:11:54')}
                attachments={[
                    {
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random1&nature,water",
                    },
                    {
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random2&nature,water",
                    },
                    {
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random3&nature,water",
                    }
                ]}
            />
            <Message
                avatar="https://avatarko.ru/img/avatarka/100na100/risunki_green_face.gif"
                text="Hello world!"
                date={new Date('fri Apr 09 2021 08:18:54')}
                isMe={true}
                isReaded={false}

            />

            <Message
                avatar="https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
                attachments={[
                    {
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random1&nature,water",
                    }
                ]}

            />
            <Message
                avatar=
                    "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
                date={new Date('fri Apr 09 2021 08:11:54')}

            /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        /><Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"
            date={new Date('fri Apr 09 2021 08:11:54')}

        />
        </div>
        ) : (<Empty
            description="Сообщений нет"
        />)

};



Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;