import "./EXnavPart.scss"
const EXnavPart=()=>{
const EXnavList=[{name:"Experience",link:""},
  {name:"Skills",icon:"icon-jishufuwu",link:""},
{name:"Skills11",icon:"icon-jishufuwu",link:""},
  {name:"Skills22",icon:"icon-jishufuwu",link:""}
]

  return(
    <div className="EXnavPart">
     {EXnavList.map((item,index)=>(
      <div key={index} className="EXnavPart-item">{item.name}</div>
     ))}
    </div>
  )
}

export default EXnavPart;