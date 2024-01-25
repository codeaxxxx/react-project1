import {Route, Routes} from "react-router-dom"

// import components
import HomePage from "./components/HomePage"
import ServicesPage from "./components/ServicesPage"
import Contact from "./components/Contact"
import Calendar from "./components/Calendar"


const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ServicesPage" element={<ServicesPage/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Calendar" element={<Calendar/>}/>
           
        </Routes>
    
    )
}

export default AppRoutes
