import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Route path='/footer' element={<Footer></Footer>}></Route>
    </div>
  )
}

export default App
