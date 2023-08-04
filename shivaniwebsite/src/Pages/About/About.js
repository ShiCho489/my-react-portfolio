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
             details="Hi! This is Shivani. I'm very ambitious Espoo (Finland) based web developer looking for 
             a role in established IT company in Finland. I am a hard worker who is not afraid of challenges. I am also a loving parent 
             who is committed to providing my children with the best possible upbringing."
             />
             <InfoCard title="Education"
             details="I am pursuing a 
             Bachelor of Engineering (ICT) 
             at Metropolia University of Applied Sciences. Recognizing the transformative power of technology, 
            I made a deliberate decision to shift my career focus towards becoming a full-stack developer. I immersed myself in self-study, and pursuing comprehensive training in various programming languages and frameworks, and actively engaged with the vibrant developer community. Through this process, I have gained and am gaining proficiency in front-end development,
             back-end development, and database management."
             />
             <InfoCard title="Skills"
             details="HTML/CSS | JAVASCRIPT | REACT | NEXT.JS | NODE.JS | SQL | MONGODB | JEST | C# | DOTNET | PYTHON | AZURE | ROBOTIC FRAMEWORK | GITHUB ACTIONS | DOCKER & KUBERNETES  "
             />
             
            </div>
        </div>
        
    
  )
}

export default About