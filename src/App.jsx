import 'antd/dist/reset.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LearnPage from './pages/LearnPage'
import JoinPage from './pages/JoinPage'
import ActivityPage from './pages/ActivityPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='learning' element={<LearnPage />} />
        <Route path='joinus' element={<JoinPage />} />
        <Route path='activities' element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
