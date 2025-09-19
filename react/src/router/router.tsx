import {createBrowserRouter} from 'react-router-dom';
import 	HomePage from '../pages/HomePage/HomePage';
import AboutMe from '../pages/AboutMe/AboutMe'
 const router=createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
         path:"/aboutme",
        element:<AboutMe/>
    }
])

export default router;