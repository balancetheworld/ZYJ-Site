import "./EXnavPart.scss"
import { useNavigate} from "react-router-dom";
import { useState } from "react";
const EXnavPart = () => {
    const EXnavList = [
        {name:"Experience", link:""},
        {name:"Skills", icon:"icon-jishufuwu", link:"skill"},
        {name:"Skills11", icon:"icon-jishufuwu", link:"//"},
        {name:"Skills22", icon:"icon-jishufuwu", link:"//"}
    ]
    const navigate=useNavigate();
    const [activeIndex,setActiveIndex]=useState("");
    const handleClick=(index:string)=>{
        setActiveIndex(index);
        navigate(index);
    }

    return(
        <div className="EXnavPart">
            {EXnavList.map((item,index)=>(
              <div
                  key={index} 
                  className={
                      activeIndex === item.link 
                          ?"EXnavPart-item active1"
                          :"EXnavPart-item"
                  } 
                  onClick={() => handleClick(item.link)}
              >
                  {item.name}
              </div>
            ))}
        </div>
    )
}

export default EXnavPart;