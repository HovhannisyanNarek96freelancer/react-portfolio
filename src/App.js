import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
          <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
