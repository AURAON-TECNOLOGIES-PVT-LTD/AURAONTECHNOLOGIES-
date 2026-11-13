import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApplicationConfirmation from './pages/ApplicationConfirmation'
import Careers from './pages/Careers'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-confirmation" element={<ApplicationConfirmation />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
