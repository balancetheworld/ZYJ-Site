import React from "react"
import { Outlet } from "react-router-dom"
import EXnavPart from "./EXcomponents/EXnavPart/EXnavPart"
const Exprience = () => {
  return(
    <React.Fragment>
        <div>
            <EXnavPart/>
            <Outlet/>
        </div>
    </React.Fragment>
  )
}

export default Exprience