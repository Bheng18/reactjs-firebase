import React from 'react'
import moment from 'moment'

export default function ProjectRow({ project }) {
    // console.log('proj row', project)
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>posted by: {project.authFirstName} {project.authLastName}</p>
                    <p>{moment(project.createdAt.toDate()).format('LLLL')}</p>
                </div>
            </div>
        </div>
    )
}
