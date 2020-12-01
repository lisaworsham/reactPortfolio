import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import projects from '../../info/projects.js';
import ProjectCard from "../../components/ProjectCard"

class Projects extends React.Component {
    state = {
        projects
    };
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Projects</h1>
                        <hr className="my-4" />
                            {this.state.projects.map(project => (
                                <ProjectCard 
                                    projectName={project.projectName}
                                    exampleImg={project.exampleImg}
                                    summary={project.summary}
                                    githubLink={project.githubLink}
                                    deployedLink={project.deployedLink}
                                />
                            ))}
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Projects;