import React from 'react'
import ProjectRow from '../common/ProjectRow'
import { Link } from 'react-router-dom'

export default function ProjectList({ projects }) {
    return (
        <div className="project-list section">
            {/* <ProjectRow /> */}
            {
                projects && projects.map(project => {
                    return (
                        <Link key={project.id} to={'/project/' + project.id}>
                            <ProjectRow
                                key={project.id}
                                project={project} />
                        </Link>
                    )
                })
            }
        </div>
    )
}
