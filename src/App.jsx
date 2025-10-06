import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<><h1>About</h1><Link to="/">Navegar</Link></>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
  )
}

export default App
