import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#1F6521",
        textDecoration: "none",
        color: "white",
      };
                            

return ( <div>
        <NavLink  exact to="/home" 
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
          Home
        </NavLink>
        <NavLink  to="/arts" exact
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
          Arts
        </NavLink>
        <NavLink  to="/business" exact
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
        Business
        </NavLink>
        <NavLink  to="/health" exact
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
          Health
        </NavLink>
        <NavLink  to="/world" exact
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
          World
        </NavLink>
        <NavLink  to="/favorites" exact
        style={linkStyles}
        activeStyle={{
          background: "#53900F",
        }}>
          Favorites
        </NavLink>
    </div>);
}

export default NavBar;
