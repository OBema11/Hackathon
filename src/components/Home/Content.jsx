import { Grid } from '@material-ui/core';
import React from 'react';
import ProductList from '../Product/ProductList';

const Content = () => {
    return (
        <Grid style={{ padding: '28px' }} container spacing-md={3} spacing-sm={3} item md={9} >
            <ProductList />
        </Grid>
    );
};

export default Content;