import './CountPart.scss'
import {useEffect, useState} from 'react';

interface AvatarProps{
    isDark:boolean;
}

interface Item {
    num:number;
    txt:string;
}

interface CountUpBoxProps {
    num: number;
    text: string;
    index: number;
}

const CountPart:React.FC<AvatarProps> = ({
    isDark
}) => {
    const showList:Item[]=[
        {num:1,txt:"years of experience"},
        {num:8,txt:"Technical skills"},
        {num:30,txt:"code commit"},
        {num:12,txt:"projects completed"}
    ]

    const CountUpBox=({num,text,index}:CountUpBoxProps)=>{
        const [count,setCount]=useState(1);
        useEffect(()=>{
            const timer = setInterval(() => {
                setCount(prev => {
                    if (prev < num) return prev + 1;
                    clearInterval(timer);
                    return prev;
                });
            }, 60); 
            return () => clearInterval(timer);
        }, [num])
        return (
            <div className={isDark ? "countBox-Dark" : "countBox-Light"} key={index}>
                <span className={isDark ? "numBox-Dark" : "numBox-Light"}>
                    { count }
                </span>
                <span className={isDark ? "textBox-Dark" : "textBox-Light"}>
                    { text }
                </span>
            </div>
        )
    }


    return(
        <div className={isDark ? "countPart-Dark" : "countPart-Light"}>
            {showList.map((item,index)=>{
                return (
                    <CountUpBox 
                        num={item.num} 
                        text={item.txt} 
                        index={index}
                    />
                )
            })}
        </div>
    )
}

export default CountPart;