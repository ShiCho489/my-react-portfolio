import './Home.scss';
import profile from "../../assets/img1.jpeg";

const Home = () => {
  return (
    <div className="home">
        <div className="details">
            <span className="intro">Hello, I'm</span>
            <div className= "name">
                <div>
                    <h1 className="txt">
                        SHI <br />
                        VAN
                        </h1>
                </div>
                <h1 className="txt lg">I</h1>
                <div className="stack">FULL-STACK <b>DEVELOPER</b></div>
            </div>
        </div>

        <div className="profile-img">
            <img src={profile} alt=" "></img>
        </div>
    </div>
  )
}

export default Home