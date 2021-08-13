import React from 'react'
import "./Sidebar.css"
import {SidebarData} from './SidebarData'
import MenuIcon from '@material-ui/icons/Menu';

function Sidebar() {
    return (
        // <MenuIcon>
        <div className="Sidebar"> 
        <ul className="SidebarList" >
            {SidebarData.map((val, key) =>{
                return <li key={key}
                className="row"
                id={window.location.pathname==val.link ? "active": ""}
                onClick={() =>
                window.location.pathname= val.link}>
                    <div id="title">{val.title}</div>
                </li>
            })}
        </ul>
            
        </div>

        // </MenuIcon>
    )
}
 export default Sidebar;