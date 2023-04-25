import React from 'react';
import Banner from '../Banner/Banner';
import Time from '../Time/Time';
import Welcome from '../Welcome/Welcome';
import Services from '../Services/Services';
import Count from '../Count/Count';
import Pizza from '../Pizza/Pizza';
import Picture from '../Picture/Picture';
import Blog from '../Blog/Blog';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Time></Time>
            <Welcome></Welcome>
            <Services></Services>
            <Pizza></Pizza>
            <Picture></Picture>
            <Count></Count>
            <Blog></Blog>
            <Map></Map>
        </div>
    );
};

export default Home;