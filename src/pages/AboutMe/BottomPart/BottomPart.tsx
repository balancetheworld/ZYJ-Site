import "./BottomPart.scss"
import './BottonPartIcon/iconfont.css'
interface AvatarProps{
    isDark:boolean;
}
const BottomPart:React.FC<AvatarProps> = ({
    isDark
}) => {
    return(
        <div className={isDark ? "BottomBox-Dark" : "BottomBox-Light"}>
            <button className={isDark ? "CVbutton-Dark" : "CVbutton-Light"}>
                <span className="CVspan">DOWNLOAD CV</span>
                <span className="iconfont icon-xiazai"></span>
            </button>
            <button className={isDark ? "GithubBtn-Dark" : "GithubBtn-Light"}>
                <span className="iconfont icon-github"></span>
            </button>
            <button className={isDark ? "QQBtn-Dark" : "QQBtn-Light"}>
                <span className="iconfont icon-QQ"></span>
            </button>
            <button className={isDark ? "SteamBtn-Dark" : "SteamBtn-Light"}>
                <span className="iconfont icon-steam"></span>
            </button>
        </div>
    )
}

export default BottomPart;