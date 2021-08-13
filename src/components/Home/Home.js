import './Home.css';
import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Slide from '../Slide/Slide';
import Images from '../Images/Images';
import video from './video/video.mp4'
import { productContext } from '../../contexts/ProductsContext';


const Home = () => {
    const {openSidebar, bar}=useContext(productContext)
    return (
        <>
        <div>
            <Grid>
                {bar ? <Sidebar/> : null}
                <Slide />
                <Images />
                <video className="video" width="100%" height="700px"  autoPlay loop muted>
                    <source src ={video} type='video/mp4'/>
                    </video> 
                
            </Grid>
        </div>
        </>
    );
};
export default Home;