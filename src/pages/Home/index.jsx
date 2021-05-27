import React from 'react';


import { Dialogs, Messages, ChatInput, Status } from "../../containers";
import {TeamOutlined, FormOutlined, EllipsisOutlined} from '@ant-design/icons';
import { Button } from 'antd';

import "./Home.scss";



const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div>
                        <Button type="link" icon={<TeamOutlined/>} />

                        <span>Список диалогов</span>
                    </div>
                    <Button type="link" icon={<FormOutlined/>} />


                </div>
                <div className="chat__sidebar-dialogs">
                    <Dialogs
                        userId={0}

                    />
                </div>
            </div>
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
                    <ChatInput/>
                </div>
            </div>
        </div>





    </section>
);


export default Home;