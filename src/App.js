
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProductContainer from './components/AddNewProduct/AddProductContainer/AddProductContainer';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login/Login';
import Notfound from './components/NotFound/Notfound';
import Pay from './components/Pay/Pay';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Product from './components/Products/Product/Product';
import ProductsContainer from './components/Products/ProductsContainer/ProductsContainer';
import Registration from './components/Registration/Registration/Registration';
import Home from './components/Shared/Home/Home/Home';
import UserOrders from './components/UserOrders/UserOrders/UserOrders';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div >

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <ProductsContainer></ProductsContainer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/userorders">
              <UserOrders></UserOrders>
            </PrivateRoute>
            <PrivateRoute path="/products/:Id">
              <Product></Product>
            </PrivateRoute>
            <PrivateRoute path="/addnewproduct">
              <AddProductContainer></AddProductContainer>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
