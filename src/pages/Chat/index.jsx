import React from 'react';


import {Messages, ChatInput, Header, Sidebar, Meta, Socket } from "./components";
import {EllipsisOutlined} from '@ant-design/icons';


import "./Chat.scss";



const Chat = () => (
    <section className="home">
        <div className="chat">
            <Sidebar/>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div/>
                    <Header online/>
                        <EllipsisOutlined style={{fontSize: "22px"}}/>


                </div>
                <div className="chat__dialog-messages">
                    <Messages />

                </div>
                <div className="chat__dialog-input">
                    <ChatInput />
                </div>

                <Socket/>
                <Meta/>

            </div>
        </div>





    </section>
);


export default Chat;