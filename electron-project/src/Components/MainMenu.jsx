import React from "react";
import SubMenu from './SubMenu';
import menus from "../Data/menus";



export default function MainMenu() {
    const SubMenus = menus.map(subMenu => {
        return (
            <SubMenu
            title={subMenu.title} 
            position={subMenu.position} 
            children={subMenu.children} />
        )
    })

    return (
        <div>
            <navbar bg="light " expand="lg">
                <div className="subMenus">
                    {SubMenus}

                </div>
            </navbar>
        </div>
    )
}