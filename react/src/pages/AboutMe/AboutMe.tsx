
import {Outlet} from "react-router-dom"
import NavPart from './navPart/navPart'
import './AboutMe.scss'
const AboutMe=()=>{
const isDark=true;
    return(
        <div className={isDark?"aboutmeBox-Dark":"aboutmeBox-Light"}>
              <NavPart isDark={isDark}/>
           <Outlet/>
        </div>
      
    )}

    export default AboutMe;