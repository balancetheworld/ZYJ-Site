import "./sayHello.scss"
interface AvatarProps{
  isDark:boolean;
}
const SayHello:React.FC<AvatarProps> = ({isDark}) => {
  return(
    <div className={isDark?"helloBox-Dark":"helloBox-Light"}>
      <div className="helloText">Hello  I'm</div>
      <div className="helloName">Yun Jing</div>
      <div className="introText">Hey there! I'm a 20-year-old college student 
        <br></br>at CQUPT ,majoring in Software Engineering. <br></br>I'm an ENTJ Sagittarius—super<br></br> energetic and love taking on challenges!<br></br> So happy you stopped by my website!</div>
    </div>
    )
  }

  export default SayHello;