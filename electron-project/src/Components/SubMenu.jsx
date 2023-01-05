import React from "react";
import { Nav, NavLink, NavDropdown } from "react-bootstrap";


const SubMenu = (props) => {
    const subMenu = props.children.length > 0 ? (
        <NavDropdown title={props.title}>
            {props.children.map(child => {
                return (
                    <NavDropdown.Item>
                        {child.title}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    ) : (
        <NavLink>{props.title}</NavLink>
    );
    return (
        <div>
            <div> <Nav className="me-auto"> {subMenu}</Nav> </div>
            {/* <div> 30 Days free Return </div> */}
        </div>
    );
};
export default SubMenu;