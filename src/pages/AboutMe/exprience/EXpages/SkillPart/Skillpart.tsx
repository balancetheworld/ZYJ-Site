import React from "react"
import './SkillPart.scss'
import "./SkillIcon/iconfont.css"

const Skillpart = () => { 
    const SkillList = [
        {
            name:"HTML5",icon:"iconfont icon-html5"
        },
        {
            name:"CSS3",icon:"iconfont icon-css"
        },
        {
            name:"JavaScript",icon:"iconfont icon-javascript"
        },
        {
            name:"React",icon:"iconfont icon-react"
        },
        {
            name:"Node.js",icon:"iconfont icon-nodejs"
        },
        {
            name:"TypeScript",icon:"iconfont icon-typescript"
        },
        {
            name:"Git",icon:"iconfont icon-git"
        },
        {
            name:"webpack",icon:"iconfont icon-webpack"
        }
    ]

    return(
        <React.Fragment>
            <div className="SKpostion">
                <div className="mySkill">My Skills</div>
                <div className="SKtext">
                    Exisiting skills are continuously being refined...<br/>New skills are continuously being updated...
                </div>
                <div className="skillBox">
                    {SkillList.map((item,index) => {
                        return (
                            <div className="skillBox-item" key={index}>
                                <i className={item.icon} />
                            </div>
                        )}
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Skillpart;