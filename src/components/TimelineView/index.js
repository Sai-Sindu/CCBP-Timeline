// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList

  return (
    <div className="timeline-view-container">
      <h1 className="project-name">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          scrollable={{scrollbar: true}}
          theme={{
            secondary: 'white',
            cardBgColor: 'white',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  courseDetails={eachItem}
                  key={eachItem.id}
                />
              )
            }
            return (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
