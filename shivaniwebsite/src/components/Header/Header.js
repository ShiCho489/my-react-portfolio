import './Header.scss';
import logo from "../../assets/image4.webp";

const Header = () => {
  return (
    <header>
      
<div className= "logo">
    <img src={logo} alt="" />
    <h1> <i>Shivani Website</i></h1>
       <nav>
        <ul>
          <div className="indicator"></div>

          <li className="active">
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">GET IN TOUCH</a>
          </li>
        </ul>
      </nav>
</div>
      

    </header>
   
  )
}

export default Header