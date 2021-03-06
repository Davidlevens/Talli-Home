import React from "react";
import { connect } from 'react-redux'
import { Button, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import './App.scss';

import { onLogout } from '../../redux/actions'

const Nav = (props) => {
  return (

  <Navbar className='navbar-expand-lg justify-content-between' >
   <div container="navlink">
  <Navbar className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={'/items'}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/rooms'}>Rooms</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/about'}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/contact'}>Contact</NavLink>
          </NavItem>
       </Navbar>
       </div>
    <Navbar.Brand className="type" href="/"><img src="./images/logotr.png" alt="TalliHome Logo"></img> </Navbar.Brand>

    {
      props.user ?
        <Button onClick={props.onLogout}>Logout</Button> :
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
    }
  </Navbar>
  );
};

export default connect(
  // mapStateToProps
  state => ({ user: state.user.details }),
  // mapDispatchToProps
  { onLogout }
)(Nav);
