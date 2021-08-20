import './Home.css';
import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HeroSlider from '../Slide/HeroSlider';
import video from './video/video.mp4'
import { productContext } from '../../contexts/ProductsContext';
import Header from '../Slide/Header';


const Home = () => {
    const {openSidebar, bar}=useContext(productContext)
    return (
        <>
        <div>
            <Grid>
                {bar ? <Sidebar/> : null}
                <Header />  
                <HeroSlider />
                <video className="video" width="100%" height="700px"  autoPlay loop muted>
                    <source src ={video} type='video/mp4'/>
                    </video> 
                
            </Grid>
        </div>
        </>
    );
};
export default Home;