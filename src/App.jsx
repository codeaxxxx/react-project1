import { BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from "./Routes"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <div>
     <Router>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
     </Router>
    
  </div>

  )
  
  
}

export default App
