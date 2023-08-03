import "./About.scss";
import InfoCard from "../../components/InfoCard/InfoCard";


const About = () => {
  return (
    <div className="about">
        <div className="name">
        <div>
            <h1 className="txt">AB <br />OU</h1>
        </div>
        <h1 className="txt lg">T</h1>
        <div className="me">ME</div>
        </div>
        <div className="info">
           
             <InfoCard title="About Me" 
             details="Hi! This is Shivani. I'm very ambitious web developer looking for 
             a role in established IT company with the"
             />
             <InfoCard title="Education"
             details="I am pursuing a 
             Bachelor of Engineering (ICT) 
             at Metropolia University of Applied Sciences. 
            Recognizing the transformative power of technology, 
            I made a deliberate decision to shift my career focus towards becoming a full-stack developer. I immersed myself in self-study, and pursuing comprehensive training in various programming languages and frameworks, and actively engaged with the vibrant developer community. Through this process, I have gained and am gaining proficiency in front-end development,
             back-end development, and database management."
             />
             <InfoCard title="Skills"
             details=" "
             />
             
            </div>
        </div>
        
    
  )
}

export default About