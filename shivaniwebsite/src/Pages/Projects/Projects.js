import './Projects.scss';

const Projects = () => {
  return (
    <div className="project-wrapper">
        <div className="project">
            <div className="project-details">
                <h2 className="project-name">Project Name</h2>
                <span className="project-desc">Description</span>
                <div className="tags">
                    <h2 className="tech-stack">Technologies used: </h2>
                </div>
                <div className="tags-wrapper">

                </div>
                <div className="tag">
                    <h2 className="title">React</h2>
                </div>
                <div className="tag">
                    <h2 className="title">SCSS</h2>
                </div>
            </div>
            <div className="project-image"></div>
        </div>
    </div>
  )
}

export default Projects