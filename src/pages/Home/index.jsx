import React from 'react';


import {Message} from "../../components";

import "./Home.scss";


const Home = ()=> (
    <section className="home">
        <Message
            avatar="https://sun1-85.userapi.com/s/v1/if1/9wBzET9Rdzn3NRIy8EU4F9ysjpL7dr8rArA091w9ReavFRbfwkEd0N84HJdXwP-kgqPZ_5Lw.jpg?size=100x0&quality=96&crop=0,0,916,916&ava=1"
            text="Hello"
            date={new Date('Sun Apr 21 2019 14:47:34')}
        />
    </section>
);


export default Home;