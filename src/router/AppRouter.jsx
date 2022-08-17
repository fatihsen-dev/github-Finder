import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
const Nav = () => (
  // <nav>
  //   <Link to='/'>Home </Link> | <Link to='/contact'>Contact</Link> |{" "}
  //   <Link to='/products'>Products</Link>
  // </nav>
  <nav className='flex gap-3'>
    <NavLink exact to='/'>
      Home
    </NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    <NavLink exact to='/products'>
      Products
    </NavLink>
    <NavLink to='/products/12'>Products Detail</NavLink>
  </nav>
);

const HomePage = () => (
  <>
    <div>Home Page</div>
  </>
);
const ContactPage = () => (
  <>
    <div>Contact Page</div>
  </>
);
const ProductsPage = () => (
  <>
    <div>Prodcuts Page</div>
  </>
);
const ProductsDefailPage = (props) => {
  return (
    <>
      <div>ProductsDefail Page</div>
      <div>{props.match.params.id}</div>
    </>
  );
};
const NotFound = () => (
  <>
    <div>404</div>
  </>
);

const AppRoter = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/contact' component={ContactPage}></Route>
      <Route exact path='/products' component={ProductsPage}></Route>
      <Route path='/products/:id' component={ProductsDefailPage}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </Router>
);

export default AppRoter;
