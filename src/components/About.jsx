function About() {
  return (
    <section id="about" className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <h2 className="display-4">About Me</h2>
            <p className="lead text-white-50">
              This is my About section where I list my skills.
            </p>
          </div>

          <div className="col-lg-5 col-md-12">
            <img src="https://placehold.co/400/" alt="About Me" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
