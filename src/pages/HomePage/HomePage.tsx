import {useState ,useRef,useEffect,useCallback}from 'react'
import "./icon/iconfont.css"
import './HomePage.scss'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [isDark,setIsDark]=useState<boolean>(true);
    const [isVisible, setIsVisible] = useState<boolean>(false); // 控制动画的状态
    const [lineHeight, setLineHeight] = useState('22px'); // 线条高度状态
    const animationRef = useRef<NodeJS.Timeout | null>(null); // 定时器引用
    const buttonRef = useRef<HTMLButtonElement>(null);

    //函数部分
    useEffect(()=>{
        const btn = buttonRef.current;
        if (btn) {
            btn.onmousemove = (e) => {
                const x = e.pageX - btn.offsetLeft;
                const y = e.pageY - btn.offsetTop;
                btn.style.setProperty('--x', `${x}px`);
                btn.style.setProperty('--y', `${y}px`);
            };
        }
    },[])

    useEffect(() => {
        const timer = setTimeout(() => { // 延迟执行动画
            setIsVisible(true);
        }, 150);
        
        return () => clearTimeout(timer);
    }, []);

    function changeStyle(){     //主题切换函数
        setIsDark(!isDark)
    }

    function splitName (str:string){   //将字符串拆分为单个字符
        return [...str]
    }
    const handleButtonClick =useCallback(() =>{   //切换主题按钮函数
        if (animationRef.current) {
            clearTimeout(animationRef.current);
        }
        setLineHeight('40px');
        animationRef.current = setTimeout(() => {
            setLineHeight('22px');
            animationRef.current = setTimeout(() => {
                changeStyle();
                animationRef.current = null;
            }, 200);
        }, 200);
    },  [animationRef,changeStyle])




    //常数据部分
    const firstName="YunJing";
    const lastName="Zhou";
    const navList=[
        { name:"About", link:"/aboutme" },
        { name:"Skills", link:"#skills" },
        { name:"Projects", link:"#projects" },
        { name:"Contact", link:"#contact" }
    ]


    return (
        <div className={isDark?"maxBox-Dark":"maxBox-Light"}>
            <div className={isDark?"logoBox-Dark":"logoBox-Light"}></div>
            <div className="changeStyleBox">
              <div className={isDark?"changeLine-Dark":"changeLine-Light"}
                  style={{ height: lineHeight, transition: 'height 0.1s ease' }}
              ></div>
            <div className={isDark?"changeButton-Dark":"changeButton-Light"} 
                onClick={handleButtonClick} >
                <span className={"iconfont icon-deng"}></span>
            </div>
        </div>

        {/*主体名字部分*/}
        <div 
            className={isDark ? "name-Dark" : "name-Light"}
        >
            {splitName(firstName)
                .map((item,index) => 
                <span key={index}>{item}</span>)
            }
            <span style={{  margin:'0 15px' }}></span>
            {splitName(lastName)
                .map((item,index) => 
                <span key={index}>{item}</span>)
            }
          
            {/*签名部分*/}
            <div className={
                `${isDark ? "signature-Dark" : "signature-Light" } 
                ${isVisible ? "signature-visible" : "signature-hidden"}`
            }>
                young and free will climb the hill
            </div>
        </div>
            {/*start按钮部分*/}
            <Link to='/aboutme'>
                <button 
                    ref={buttonRef}
                    className={ isDark ? "aboutmeBt-Dark" : "aboutmeBt-Light"}>
                    <span>Let's  Start</span>
                </button>
            </Link>
   
            {/*右侧按钮部分*/}
            <div className={isDark?"emailBt-Dark":"emailBt-Light"}>
                <a 
                    href="mailto:your-email@example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}  >
                    <span className="iconfont icon-youxiang"></span>
                </a>
            </div>
            <div className={isDark?"githubBt-Dark":"githubBt-Light"}>
                <a 
                    href="https://github.com/balancetheworld" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}  >
                    <span className={"iconfont icon-GitHub"}></span>
                </a>
            </div>

            {/*上层导航组件部分*/}
            <div className={`${isDark?"navBox-Dark":"navBox-Light"} ${isVisible ? "nav-visible" : "nav-hidden"}`}>
                {navList.map((item,index) => (  
                    <Link 
                        key={index} 
                        to={item.link}
                        style={{ textDecoration: 'none', color: 'inherit' }}  // 移除默认链接样式
                    >
                        <span>{item.name}</span>
                    </Link>))
                }
            </div>
        </div>
    )
}
export default HomePage