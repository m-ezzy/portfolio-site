import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
			<Link to="/profile" className="color11">Profile</Link>
      <Link to="/technologies" className="color21">Technologies</Link>
      <Link to="/projects" className="color31">Projects</Link>
      <Link to="/contact" className="color41">Contact</Link>
    </nav>
  )
}

export default Navbar
