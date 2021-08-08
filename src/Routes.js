import Edit from './components/Admin/Edit';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './components/Admin/Add';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Product/ProductList';
import ProductsContext from './contexts/ProductsContext';
import Cart from './components/Cart/Cart';
import AuthContext from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const Routes = () => {
    return (
        <AuthContext>
            <ProductsContext>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/list" component={ProductList} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </BrowserRouter>
            </ProductsContext>
        </AuthContext>
    );
};

export default Routes;