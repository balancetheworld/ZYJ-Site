import { Fragment } from "react";
import {Outlet} from "react-router-dom"
import NavPart from './navPart/navPart'
import './AboutMe.scss'
const AboutMe = () => {
    const isDark = true;
    return (
        <Fragment>
            <div className={isDark ? "aboutmeBox-Dark" : "aboutmeBox-Light"}>
                <NavPart isDark={ isDark }/>
                <Outlet/>
            </div>
        </Fragment>
      
    )
}

export default AboutMe;