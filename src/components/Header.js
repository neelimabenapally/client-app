import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAuth0 } from "../react-auth0-spa";

const Header = (props) => {
    const auth = useAuth0() || props.dummyAuth; // Authentication Token From Auth0 or dummy Authentication Token for Storybook
    const { isAuthenticated, loginWithRedirect, logout } = auth;

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">eFanpage</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {isAuthenticated &&
                        <Nav.Link href="/profile">Profile</Nav.Link>}
                    <Nav.Link href="/listing/movie">Movies</Nav.Link>
                    <Nav.Link href="/listing/tv">Series</Nav.Link>
                    <div>
                        {!isAuthenticated && (
                            <React.Fragment>
                                <Button onClick={() => loginWithRedirect({})}>Log In</Button> &nbsp;
                                <Button variant="light" onClick={() => loginWithRedirect({})}>Sign Up</Button>
                            </React.Fragment>
                        )}
                        {isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>}
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;