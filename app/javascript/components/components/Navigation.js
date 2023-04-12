import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/apartmentindex">View Listings</NavLink>
        </NavItem>
      {logged_in && 
        <>      
          <NavItem>
            <NavLink to="/myapartments">My Listings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/apartmentnew">Create Apartment</NavLink>
          </NavItem>  
          <NavItem>
            <a href={sign_out_route}>Sign Out</a>
          </NavItem>
        </>
      }
      {!logged_in &&
          <>      
            <NavItem>
              <a href={sign_in_route}>Sign In</a>
            </NavItem>
            <NavItem>
              <a href={new_user_route}>Sign Up</a>
            </NavItem>
        </>
      }
      </Nav>
    </>
  )
}

export default Navigation