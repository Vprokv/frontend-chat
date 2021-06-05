import React from 'react';


import {Messages, ChatInput, Status, Sidebar } from "../../containers";
import {EllipsisOutlined} from '@ant-design/icons';


import "./Home.scss";



const Home = () => (
    <section className="home">
        <div className="chat">
            <Sidebar/>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div/>
                    <Status online/>
                        <EllipsisOutlined style={{fontSize: "22px"}}/>


                </div>
                <div className="chat__dialog-messages">
                    <Messages />

                </div>
                <div className="chat__dialog-input">
                    <ChatInput />
                </div>
            </div>
        </div>





    </section>
);


export default Home;