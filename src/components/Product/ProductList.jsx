import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';
import ProductCard from './ProductCard';
import { Pagination } from '@material-ui/lab';
import Filter from '../Filter/Filter';

const ProductList = () => {
    let history = useHistory();
    const { products, getProducts, paginatedPages } = useContext(productContext);
    const [page, setPage] = useState(getPage())

    console.log(products);
    useEffect(() => {
        getProducts(history)
    }, [])

    function getPage(e, page) {
        const search = new URLSearchParams(history.location.search)
        if (!search.get('_page')) {
            return 1
        }
        return search.get('_page')
    }

    const handlePage = (e, pageVal) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setPage(pageVal)
    }

    return (
        <>
        {/* <Filter> */}
            <Grid container spacing={3} justify="space-evenly" style={{ marginTop: '0px' }}>
                {
                    products ? (
                        products.map((item, index) => (
                            <ProductCard item={item} key={index} history={history} />
                        ))
                    ) : (<h1>Loading...</h1>)
                }
            </Grid>
            <div>
                <Pagination
                    count={paginatedPages}
                    color="primary"
                    onChange={handlePage}
                    page={+page}
                />
            </div>
            {/* </Filter> */}
        </>
    );
};
export default ProductList;