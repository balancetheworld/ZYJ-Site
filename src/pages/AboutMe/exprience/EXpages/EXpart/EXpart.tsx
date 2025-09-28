import { useEffect, useState, useRef, useMemo } from "react"; 
import "./EXpartIcon/iconfont.css";
import "./EXpart.scss";


const EXpart = () => {
    const EXList = useMemo(() => [
        {
            time: "2005-12-14",
            name: "Birthday",
            introduce: "When I saw the sun for the first time.",
            detail: "", 
        },
        {
            time: "2005-12-14",
            name: "Birthday",
            introduce: "When I saw the sun for the first time.",
            detail: "", 
        },
        {
            time: "2012-05-01",
            name: "",
            introduce: "111hgaojiahuo",
            detail: "111111233322111111111111111111111111111",
        },
        {
            time: "2025-05-01",
            name: "haojiahuo",
            introduce: "111hg33aojiahuo",
            detail: "11111112222211111111111111111111111111",
        },
        {
            time: "2022-05-01",
            name: "haojiahuo",
            introduce: "111hgaojiahuo",
            detail: "11111111111",
        },
        {
            time: "2026-05-01",
            name: "haojiahuo",
            introduce: "111hgaojiahuo",
            detail: "11111111111",
        }
    ], []);

    // 偏移量状态，控制卡片切换和时钟旋转
    const [offset, setOffset] = useState(0);
    const maxOffset = 0; // 最大偏移量，最顶部位置
    // 最小偏移量（修复类型错误，从字符串改为数字）
    const minOffset = -(EXList.length - 1);
    // 获取时钟表盘的DOM元素引用
    const clockRef = useRef<HTMLDivElement>(null);

    // useEffect钩子用于初始化时钟刻度
    useEffect(() => {
        const clock = clockRef.current; 
        if (!clock) return; 

        clock.innerHTML = ""; // 清空时钟表盘现有内容

        // 遍历EXList创建主刻度
        EXList.forEach((item, index) => {
            const degree = index * 60;
            addClockScale(clock, degree); // 添加普通刻度
            const year = parseInt(item.time.split('-')[0]);
            addThickClockScale(clock, degree, year); // 添加粗刻度
        });

        // 添加额外的普通刻度（每30度一个，使时钟更完整）
        for (let i = 10; i < 360; i += 10) {
            // 跳过已有粗刻度的位置
            if (!EXList.some((_, idx) => idx * 60 === i)) {
                addClockScale(clock, i);
            }
        }
    }, [EXList]);

    // 定义添加普通时钟刻度的函数
    const addClockScale = (clock: HTMLDivElement, degree: number) => {
        const invisibleTable = document.createElement("div");
        invisibleTable.className = "invisible-table";
        invisibleTable.style.transform = `rotate(${degree}deg)`;
        
        const scale = document.createElement("div");
        scale.className = "clock-scale";
        
        invisibleTable.appendChild(scale);
        clock.appendChild(invisibleTable);
    };

    // 定义添加带年份显示的粗刻度的函数
    const addThickClockScale = (clock: HTMLDivElement, degree: number, time: number) => {
        const invisibleTable = document.createElement("div");
        invisibleTable.className = "invisible-table";
        invisibleTable.style.transform = `rotate(${degree}deg)`;
        
        const thickScale = document.createElement("div");
        thickScale.className = "clock-thick";
        
        const text = document.createElement("span");
        text.textContent = `${time}`;
        thickScale.appendChild(text);
        
        invisibleTable.appendChild(thickScale);
        clock.appendChild(invisibleTable);
    };

    // 向前（上）切换卡片
    const slideToPrev = () => {
        setOffset(prev => Math.min(maxOffset, prev + 1));
    };

    // 向后（下）切换卡片
    const slideToNext = () => {
        setOffset(prev => Math.max(minOffset, prev - 1));
    };

    // 旋转时钟表盘
    const clockRotate = (degree: number) => {
        if (clockRef.current) {
            clockRef.current.style.transform = `rotate(${degree}deg)`;
        }
    };

    // 偏移量变化时更新卡片位置和时钟旋转
    useEffect(() => {
        const slides = document.querySelectorAll(".card");
        slides.forEach((slide) => {
            (slide as HTMLElement).style.transform = `translateY(${offset * 100}%)`;
        });
        clockRotate(offset * 60);
    }, [offset]);

    // 渲染卡片列表
    const showEXList = () => {
        return EXList.map((item, index) => (
            <div className="card" key={index}>
                <div className="card-time">{item.time}</div> 
                <div className="card-name">{item.name}</div> 
                <div className="card-introduce">{item.introduce}</div> 
                <div className="card-detail">{item.detail}</div>
            </div>
        ));
    };

    return (
        <div className="EXpostion"> 
            <div className="EXmain">
                <i 
                  className="iconfont icon-xiangshang" 
                  id="up-btn" 
                  onClick={slideToPrev}
                />
                <i 
                  className="iconfont icon-xiangxia" 
                  id="down-btn" 
                  onClick={slideToNext}
                />
                <div className="content">{showEXList()}</div> 
                <div className="clock">
                    <div className="clock-center"></div>
                    <div className="clock-pointer"></div>
                    <div className="clock-table" ref={clockRef}></div>
                </div>
            </div>
        </div>
    );
};

export default EXpart;
