import { useState } from "react";
import './Projects.scss';
import Template from "../../components/ProjectTemplate/Template";
import keepApp from "../../assets/Keep-app.png";

const Projects = () => {
    const [tags] = useState(["React", "CSS/SCSS", "NOdeJs","Express", "More"])
    
  return (
    <div className="project-wrapper">
        <Template projectName="Keep App" 
        projectDesc="Project Description..." 
        tags={tags}
        img={keepApp}
        />
        <Template />
        <Template />
        <Template />
    </div>
  )
}

export default Projects