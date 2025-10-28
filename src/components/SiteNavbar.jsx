import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function SiteNavbar({
  brand = 'My Portfolio',
  links = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ],
  dropdown = {
    title: 'My CV',
    items: [
      { href: '#cv', label: 'View CV' },
      { href: '#blog', label: 'Download CV' },
    ],
  },
}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {links.map((l) => (
              <Nav.Link key={l.href} href={l.href}>{l.label}</Nav.Link>
            ))}
            {dropdown && (
              <NavDropdown title={dropdown.title} id="nav-dropdown">
                {dropdown.items.map((item) => (
                  <NavDropdown.Item key={item.href} href={item.href}>
                    {item.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
