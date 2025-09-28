import React, { useEffect, useState } from 'react';
import "./avatar.scss"
import avatarImg from "./avatarImage/avatar.jpg"

interface AvatarProps{
    isDark:boolean;
}
const Avatar:React.FC<AvatarProps> = ({isDark}) => {
    const [isImage,setIsImage] = useState<boolean>(false);
    useEffect(()=>{
        const timer = setTimeout(() => {
           setIsImage(true);
        }, 10);
        return () => clearTimeout(timer);
    },[])

    return(
        <div className={isDark ? "avatarBox-Dark" : "avatarBox-Light"}>
            <span className='avatarImg'
                style={{ 
                    backgroundImage: `url(${avatarImg})`,  
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',  
                    backgroundPosition: 'center',  
                    display: 'inline-block',  
                    width: '15vw',  
                    height: '15vw' ,
                    opacity: isImage? 1 : 0,
                    transition: 'opacity 1.5s ease-in-out'
                }}
            ></span>
        </div>
    )
}

export default Avatar;