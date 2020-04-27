import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Listing from "./components/listing/Listing";
import DetailPage from "./components/detail/DetailPage";
import Profile from "./components/Profile";
import Similar from "./components/Similar";
import PrivateRoute from "./components/PrivateRoute";
import history from "./lib/history";


const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <Header />
      <div className="main_body">
        <BrowserRouter history = {history}>
        
          <Switch>
            <PrivateRoute path="/tv/view/:id" component={DetailPage} /> 
            <PrivateRoute path="/movie/view/:id" component={DetailPage} />    
            <PrivateRoute path="/listing/movie" component={Listing} />
            <PrivateRoute path="/listing/tv" component={Listing} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/listing/similar/:type/:id" component = {Similar}/>
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
      
    </Container>
  );
}

export default App;
