import { Outlet } from "react-router-dom"
import EXnavPart from "./EXcomponents/EXnavPart/EXnavPart"
const Exprience=()=>{
  return(
    <div>
     <EXnavPart/>
     <Outlet/>
    </div>
  )
}

export default Exprience