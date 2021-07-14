import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import Navigation from './components/Navigation';

const App = () => {
  return (

    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/e-comerce" exact component={MainPage}></Route>
        <Route path="/:something" exact component={ErrorPage}></Route>
      </Switch>

    </Router>

    //   <Fragment>
    //   <Header />
    //   <h3>This is my new app</h3>
    //   <Todos />
    // </Fragment>
  )

};

export default App;
