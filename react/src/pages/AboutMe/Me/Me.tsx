import Avatar from "../avatar/avater";
import SayHello from '../sayHello/sayHello';
import CountPart from '../CountPart/CountPart'
import BottomBox from '../BottomPart/BottomPart'
import FallingBox from './fallingblocksBox/fallingblockBox'

const Me=()=>{

  const isDark=true;
  return(
    <div className="meBox">
    <Avatar isDark={isDark}/>
        <SayHello isDark={isDark}/>
        <CountPart isDark={isDark}/>
        <BottomBox isDark={isDark}/>
        <FallingBox ></FallingBox>
    </div>
  )
}

export default Me