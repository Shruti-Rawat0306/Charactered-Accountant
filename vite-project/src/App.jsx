import { Route, Routes } from 'react-router-dom'
import './App.css'
import FrontPage from './FrontPage'
import FrontPage2 from './FrontPage2'
import FrontPage3 from './FrontPage3'
import FrontPage6 from './FrontPage6'
import FrontPage7 from './FrontPage7'
import FrontPage9 from './FrontPage9'
import Success from './Template/Success'
function App() {
  return (
    <>
     <Success/>
     <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/services' element={<FrontPage2/>}/>
        <Route path='/about' element={<FrontPage3/>}/>
        <Route path='/contact' element={<FrontPage6/>}/>
         <Route path='/career' element={<FrontPage7/>}/>
         <Route path='/resources' element={<FrontPage9/>}/>
       </Routes>
    </>
  )
}

export default App
