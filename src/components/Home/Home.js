import { Grid } from '@material-ui/core';
import React from 'react';
import ProductList from '../Product/ProductList';
import Slide from '../Slide/Slide';
import Images from '../Images/Images';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Grid>
                <Slide />
                <Images />
                <Footer />
            </Grid>
        </div>
    );
};

export default Home;