import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './Navbar'

import Profile from './pages/Profile'
import Technologies from './pages/Technologies'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './styles/style.css'
import './styles/colors.css'
import './styles/animation.css'

function App() {
  return (
    <div className="app">
    {/* <BrowserRouter> */}
    <BrowserRouter basename='/portfolio-site/'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"profile"} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
