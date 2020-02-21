import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from './Routes';

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (

    <div className="bg">
      <div className="App container">
      <Navbar  fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/">Qdox Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {isAuthenticated? (
            <>
            <LinkContainer to="/Docinput/new">
            <NavItem>DocInput</NavItem>
            </LinkContainer>
            <NavItem onClick={handleLogout}>Logout</NavItem>  
            </>
          ) 
        :( <>
          <LinkContainer to="/signup">
          <NavItem>Signup</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
          <NavItem>Login</NavItem>
          </LinkContainer>
          </>
          )}
         <NavItem>Login</NavItem>
         </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
     </div>
    </div>
  );
}

export default App;
