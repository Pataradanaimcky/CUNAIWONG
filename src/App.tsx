import {Route, Routes} from "react-router-dom"
import Home from './Home Page/Home'
import Engineer from './Engineer Page/Engineer'
import Education from "./Education Page/Education"
import Politic from "./Politic Page/Politic"
import Dom from "./Dom Page/Dom"
import Law from "./Law Page/Law"
import Login from './Login/login'
import Register from './register/register'
import Item1 from './Item Page/item1'
import Review from './Review Page/review'
import Art from './Art Page/Art'

function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Engineer" element={<Engineer/>}/>
    <Route path="/Education" element={<Education/>}/>
    <Route path="/Politic" element={<Politic/>}/>
    <Route path="/Dom" element={<Dom/>}/>
    <Route path="/Law" element={<Law/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/Engineer/item1" element={<Item1/>}/>
    <Route path="/Engineer/item1/review" element={<Review/>}/>
    <Route path="/Art" element={<Art/>}/>
  </Routes>
}



export default App