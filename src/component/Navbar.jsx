import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom'
import './Styles.css'

const Nav = styled(AppBar)`
background: #3B444B;
`
const Tab = styled(`p`)`
 font-size:1rem;
 color:#FFFFFF;
 cursor:pointer;
 margin:1rem;

`

const Navbar = () => {
  return (
    <div>
        <Nav  position="static">
            <Toolbar>
               <NavLink to='/'><Tab>CRUD</Tab></NavLink>
               <NavLink to='/AllUsers'><Tab>All Users</Tab></NavLink>
               <NavLink to='/AddUsers'><Tab>Add Users</Tab></NavLink>
            </Toolbar>
        </Nav>
    </div>
  )
}

export default Navbar