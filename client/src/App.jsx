import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/SignedIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />

      </Routes>

    </BrowserRouter>
  )
}
