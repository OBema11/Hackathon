import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { CardHeader, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: "20px"
    },
});

export default function ProductCard({ item, history }) {
    const classes = useStyles();
    const { deleteProduct, addProductInCart, checkProductInCart } = useContext(productContext)

    return (
        <Card className={classes.root}>
            <CardHeader
                title={item.title}
                subheader={item.type}
            />
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={item.image}
                // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/edit/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                    <IconButton aria-label="add to favorites" color="inherit">
                        <EditIcon />
                    </IconButton>
                </Link>
                <IconButton aria-label="share" color="inherit" onClick={() => deleteProduct(item.id, history)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={() => addProductInCart(item)} color={checkProductInCart(item.id) ? "secondary" : "inherit"}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="add to favorites" color="inherit">
                    <FavoriteIcon />
                </IconButton>
                <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <IconButton aria-label='share'>
                        <Button variant="contained" color="secondary">Detail</Button>
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}
