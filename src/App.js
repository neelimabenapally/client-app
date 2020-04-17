import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Listing from "./components/listing/Listing";
import DetailPage from "./components/detail/DetailPage";

const App = () => {
  return (
    <Container fluid>
      <Header />
      <div className="main_body">
        <BrowserRouter>
          <Switch>
            <Route path="/tv/view/:id" component={DetailPage} /> 
            <Route path="/movie/view/:id" component={DetailPage} />    
            <Route path="/listing/movie" component={Listing} />
            <Route path="/listing/tv" component={Listing} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
      
    </Container>
  );
}

export default App;
