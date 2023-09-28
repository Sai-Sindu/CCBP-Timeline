// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList, name} = courseDetails

  return (
    <div className="course-card">
      <div className="title-duration-card">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle className="icon-img" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tag-list-card">
        {tagsList.map(eachTag => (
          <li className="tag-name" key={eachTag.id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
