function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark" aria-label="Primary navigation">
      <div className="container-fluid" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <span className="navbar-brand">My Portfolio</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SiteNavbar;