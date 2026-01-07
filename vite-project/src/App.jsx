import { Route, Routes } from 'react-router-dom'
import './App.css'
import ResourceDetails from './Resourcess/ResourceDetails'
import TopBlogDetails from  './BlogDetails/TopBlogDetails'
import CareerDetailsContent from './CareerDetails/CareerDetailsContent'
import FrontPage from './FrontPage'
import FrontPage2 from './FrontPage2'
import FrontPage3 from './FrontPage3'
import FrontPage4 from './FrontPage4'
import FrontPage6 from './FrontPage6'
import FrontPage7 from './FrontPage7'
import FrontPage9 from './FrontPage9'
import Sales from './CareerDetails/Sales.jsx'
import Design from './CareerDetails/Design.jsx'
import AdminInquiries from './admin/AdminInquiries.jsx'
import Marketing from './CareerDetails/MarketingSkills.jsx'

function App() {
  return (
    <> 
      
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/services' element={<FrontPage2/>}/>
        <Route path='/about' element={<FrontPage3/>}/>
        <Route path='/contact' element={<FrontPage6/>}/>
        <Route path='/career' element={<FrontPage7/>}/>
        <Route path='/resources' element={<FrontPage9/>}/>
        <Route path="/resource-details" element={<ResourceDetails />} />
        <Route path="/blog-details" element={<TopBlogDetails />} />
        <Route path="/blog" element={<FrontPage4 />} />
        <Route path="/careers/frontend" element={<CareerDetailsContent />} />
        <Route path="/careers/sales" element={<Sales/>} />
        <Route path="/careers/design" element={<Design/>} />
        <Route path="/careers/marketing" element={<Marketing/>} />
        <Route path="/book-consultation" element={<FrontPage6 />} />
        <Route path="/admin" element={<AdminInquiries />} />
      </Routes>
    </>
  )
}

export default App
