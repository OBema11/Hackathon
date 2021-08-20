import Edit from './components/Admin/Edit';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './components/Admin/Add';
import Home from './components/Home/Home';
import ProductList from './components/Product/ProductList';
import ProductsContext from './contexts/ProductsContext';
import Cart from './components/Cart/Cart';
import AuthContext from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductDetail from './components/Product/ProductDetail';
import AboutUs from './components/AboutUs/AboutUs';
import PaymentForm from './components/Checkout/PaymentForm';
import Card from './components/Card/Card';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import FilterHome from './components/Filter/FilterHome';


const Routes = () => {
    return (
        <AuthContext>
            <ProductsContext>
                <BrowserRouter>
                    {/* <Navbar/> */}
                
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/detail/:id" component={ProductDetail} />
                        <Route exact path="/aboutus" component={AboutUs}/>
                        <Route exact path="/contactus" component={ContactUs}/>
                        <Route exact path="/payment" component={PaymentForm}/>
                        <Route exact path="/card" component={Card}/>
                        <Route exact path="/list" component={FilterHome} />
                        
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </ProductsContext>
        </AuthContext>
    );
};
export default Routes;