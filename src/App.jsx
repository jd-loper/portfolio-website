import SiteNavbar from './components/SiteNavbar';
import ProjectCards from './components/ProjectCards';
import Hero from './components/Hero';

export default function App() {
  return (
    <>
    <SiteNavbar brand="Portfolio" />
    <Hero />
    <ProjectCards />
    </>
  )
}
