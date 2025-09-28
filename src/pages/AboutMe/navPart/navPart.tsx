import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navPart.scss"
import "./navPartIcon/iconfont.css"
import "./navPartIcon1/iconfont.css"


interface AvatarProps{
    isDark:boolean;
}
const NavPart:React.FC<AvatarProps> = ({
    isDark
}) => {
    const [activeLink, setActiveLink]=useState("/aboutme");

    const ButtonList=[
        {icon:"iconfont icon-home",text:"Home",Link:"/"},
        {icon:"iconfont icon-ic_yonghu1",text:"Me",Link:"/aboutme"},
        {icon:"iconfont icon-jishufuwu",text:"Experience",Link:"/aboutme/exprience"},
        {icon:"iconfont icon-xiaolian",text:"Interest",Link:"/aboutme/interest"}
    ]

    const handleItemClick=(Link:string)=>{
        setActiveLink(Link);
    }

    return (
        <React.Fragment>
            <div className="navPart">
                <div className={isDark ? "navPart-Dark" : "navPart-Light"}>
                    <ul>
                        {ButtonList.map((item,index)=>(
                            <li key={index}
                                className={activeLink===item.Link ? "active" : ""}
                                onClick={() => handleItemClick(item.Link)}
                            >
                                <Link to={item.Link}>
                                    <span className='icon'>
                                      <i className={item.icon}></i>
                                    </span>
                                    <span className="text">{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    ) 
}
export default NavPart;