import React, { useState, useEffect, useCallback } from "react";
import "./sayHello.scss"
interface AvatarProps {
    isDark:boolean;
}
const SayHello:React.FC<AvatarProps> = ({
    isDark
}) => {
    const [age, setAge] = useState<number>(0);
    
    const calculeteAge = useCallback(() => {
        const startYear = 2005
        const currentYear = new Date().getFullYear();
        const age = currentYear - startYear;
        setAge(age);
    }, [])

    useEffect(() => {
        calculeteAge();
    }, []);
    
    return (
        <React.Fragment>
            <div className={ isDark ? "helloBox-Dark" : "helloBox-Light" }>
                <div className="helloText">
                    Hello  I'm
                </div>
                <div className="helloName">
                    Yun Jing
                </div>
                <div className="introText">
                    Hey there! I'm a {age}-year-old college student 
                    <br></br>
                    at CQUPT ,majoring in Software Engineering. 
                    <br></br>
                    I'm an ENTJ Sagittarius—super
                    <br></br>
                    energetic and love taking on challenges!
                    <br></br> 
                    So happy you stopped by my website!
                </div>
            </div>  
        </React.Fragment>
    )
}

export default SayHello;