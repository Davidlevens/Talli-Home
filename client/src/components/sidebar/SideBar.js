import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './App.scss';


const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span onClick={props.toggle} ></span>
      <h3>Inventory List</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-styled pb-3">
        <p>Dashboard</p>
        <SubMenu title="Your Saved Homes" icon={faHome} items={submenus[0]} />
        <NavLink tag={Link} to={'/home'}>
        </NavLink>
        <SubMenu title="Saved Home" icon={faHome} items={submenus[1]} />
        <SubMenu title="Options" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={'/about'}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />About
            </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/contact'}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Contact
            </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Your saved homes",
      target: "Home-1"
    },
    {
      title: "Second Home",
      target: "Home-2"
    },
    {
      title: "Third Home",
      target: "Home-3"
    },
    {
      title: "Fourth Home",
      target: "Home-4"
    }, {
      title: "Fifth Home",
      target: "Home-5"
    },
    {
      title: "Sixth Home",
      target: "Home-6"
    },

  ],
  [
    {
      title: "rooms",
      target: "/rooms",
    },
    {
      title: "Items",
      target: "/items",
    }
  ]
]

export default SideBar;