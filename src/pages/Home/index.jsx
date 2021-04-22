import React from 'react';

import {Message, Dialogs} from "../../components";

import "./Home.scss";

const Home = () => (
    <section className="home">
        <Dialogs
            userId={0}
            items={[
                {
                    _id: "6fce7003fd7a35eed735bfff22e62220",
                        text: 'Мы все свидетельствуем вам глубочайшее наше почтение и целуем ваши рученьки',
                        // isReaded: false,
                        created_at: new Date(),  //new Date('fri Apr 09 2021 08:18:54') //'fri Apr 09 2021 08:18:54'
                        user: {
                            _id: "698d51a19d8a121ce581499d7b701668",
                            fullName: "Макс",
                            avatar: null,
                        }
                },
                {
                    _id: "f99d4f76a9e844c6c7d0ba3dc7e19078",
                    text: 'Привет! как твои дела?',
                    // isReaded: false,
                    created_at: 'fri Apr 09 2021 08:18:54',
                    user: {
                        _id: "cef468eeda569cc1b16b45fd53200b9c",
                        fullName: "Алан Тьюринг",
                        avatar: "https://games.mail.ru/hotbox/content_files/gallery/b3/f4/1b6f0a10.jpeg",
                    }
                }
            ]}
        />

        <Message
            avatar=
                "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            date={new Date('fri Apr 09 2021 08:11:54')}
            audio="https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.mp3"

        />

        {/*<Message*/}
        {/*    avatar=*/}
        {/*        "https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"*/}
        {/*    text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях лол"*/}
        {/*    date={new Date('fri Apr 09 2021 08:11:54')}*/}
        {/*    attachments = {[*/}
        {/*        {*/}
        {/*            filename: "image.jpg",*/}
        {/*            url: "https://source.unsplash.com/100x100/?random1&nature,water",*/}
        {/*        },*/}
        {/*        {*/}
        {/*            filename: "image.jpg",*/}
        {/*            url: "https://source.unsplash.com/100x100/?random2&nature,water",*/}
        {/*        },*/}
        {/*        {*/}
        {/*            filename: "image.jpg",*/}
        {/*            url: "https://source.unsplash.com/100x100/?random3&nature,water",*/}
        {/*        }*/}
        {/*    ]}*/}
        {/*/>*/}
        {/*<Message*/}
        {/*    avatar="https://avatarko.ru/img/avatarka/100na100/risunki_green_face.gif"*/}
        {/*    text="Hello world!"*/}
        {/*    date={new Date('fri Apr 09 2021 08:18:54')}*/}
        {/*    isMe={true}*/}
        {/*    isReaded = {false}*/}

        {/*/>*/}

        {/*<Message*/}
        {/*    avatar="https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"*/}
        {/*    attachments = {[*/}
        {/*        {*/}
        {/*            filename: "image.jpg",*/}
        {/*            url: "https://source.unsplash.com/100x100/?random1&nature,water",*/}
        {/*        }*/}
        {/*    ]}*/}

        {/*/>*/}

        {/*<Message*/}
        {/*    avatar="https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"*/}
        {/*    isTyping*/}

        {/*/>*/}
    </section>
);


export default Home;