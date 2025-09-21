
import Avatar from "./avatar/avater";
import SayHello from './sayHello/sayHello';
import CountPart from './CountPart/CountPart'
import BottomBox from './BottomPart/BottomPart'
import NavPart from './navPart/navPart'
import './AboutMe.scss'
const AboutMe=()=>{
const isDark=true;
    return(
        <div className={isDark?"aboutmeBox-Dark":"aboutmeBox-Light"}>
              <NavPart isDark={isDark}/>
            <div>
        <Avatar isDark={isDark}/>
        <SayHello isDark={isDark}/>
        <CountPart isDark={isDark}/>
        <BottomBox isDark={isDark}/>
      
            </div>
       
        </div>
      
    )}

    export default AboutMe;