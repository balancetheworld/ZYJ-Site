import {createBrowserRouter} from 'react-router-dom';
import 	HomePage from '../pages/HomePage/HomePage';
import AboutMe from '../pages/AboutMe/AboutMe'
import Me from "../pages/AboutMe/Me/Me"
import Exprience from "../pages/AboutMe/exprience/exprience"
import Interest from "../pages/AboutMe/Interest/Interest"
import EXPart from '../pages/AboutMe/exprience/EXpages/EXpart/EXpart'
import Skillpart from '../pages/AboutMe/exprience/EXpages/SkillPart/Skillpart'
 const router=createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
         path:"/aboutme",
        element:<AboutMe/>,
        children:[
            {index:true,
                element:<Me/>
            },
            {
          path:"exprience",
         element:<Exprience/>,
         children:[
             {
                 index:true,
                 element:<EXPart/>
             },
             {
                 path:"skill",
                 element:<Skillpart/>
             }
         ]
            },
            {
                path:"interest",
             element:<Interest/>
            }
        ]
    }
])

export default router;