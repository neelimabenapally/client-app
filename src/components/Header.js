import React from "react";
import { Navbar, Nav, NavDropdown, Button  } from "react-bootstrap";
import { useAuth0 } from "../react-auth0-spa";

const Header = (props) => {
    const auth = useAuth0() || props.dummyAuth;
    const { isAuthenticated, loginWithRedirect, logout } = auth;
    

    return(
        
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
                        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
                    )}

                    {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
                </div>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;