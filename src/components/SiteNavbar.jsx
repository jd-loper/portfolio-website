function SiteNavbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <span class="navbar-brand">My Portfolio</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbar">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">About</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SiteNavbar;