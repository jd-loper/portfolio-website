function ProjectCards() {
    return (
        <div className="row bg-dark text-light py-5" id="projects" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card bg-dark text-light">
                    <img src="https://placehold.co/286x180" className="card-img-top" alt="Project Screenshot" />
                    <div className="card-body">
                        <h5 className="card-title">Project Title</h5>
                        <p className="card-text">Brief description of the project.</p>
                        <a href="#" className="btn btn-primary" id="project-button">View Project</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card bg-dark text-light">
                    <img src="https://placehold.co/286x180" className="card-img-top" alt="Project Screenshot" />
                    <div className="card-body">
                        <h5 className="card-title">Project Title</h5>
                        <p className="card-text">Brief description of the project.</p>
                        <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards