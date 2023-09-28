// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="projectTitle" className="project-img" />
      <div className="title-duration-card">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar className="icon-img" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
