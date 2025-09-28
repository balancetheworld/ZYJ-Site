import React from 'react';
import {createBrowserRouter} from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const AboutMe = React.lazy(() => import('../pages/AboutMe/AboutMe'));
const Me = React.lazy(() => import('../pages/AboutMe/Me/Me'));
const Exprience = React.lazy(() => import('../pages/AboutMe/exprience/exprience'));
const Interest = React.lazy(() => import('../pages/AboutMe/Interest/Interest'));
const EXPart = React.lazy(() => import('../pages/AboutMe/exprience/EXpages/EXpart/EXpart'));
const Skillpart = React.lazy(() => import('../pages/AboutMe/exprience/EXpages/SkillPart/Skillpart'));

 const router=createBrowserRouter([
    {
        path:"/",
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <HomePage />
            </React.Suspense>
        ),
    },
    {
        path:"/aboutme",
        element: (
            <React.Suspense fallback={<div>Loading...</div>}>
                <AboutMe />
            </React.Suspense>
        ),
        children:[
            {index:true,
                element: (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Me />
                    </React.Suspense>
                )
            },
            {
                path:"exprience",
                element: (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Exprience />
                    </React.Suspense>
                ),
                children:[
                    {
                        index:true,
                        element: (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <EXPart />
                            </React.Suspense>
                        )
                    },
                    {
                        path:"skill",
                        element: (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Skillpart />
                            </React.Suspense>
                        )
                    }
                ]
            },
            {
                path:"interest",
                element: (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Interest />
                    </React.Suspense>
                )
            }
        ]
    }
])

export default router;