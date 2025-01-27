import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import RightSideber from "./components/RightSideber"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import Purchase from "./pages/Purchase"
import ManageSupplier from "./pages/supplier/ManageSupplier"
import CreacteProduction from "./pages/production/CreacteProduction"
import ManageProduction from "./pages/production/ManageProduction"
import CreateSup from "./pages/supplier/CreateSup"
import UpdateSup from './pages/supplier/UpdateSup';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}> 
              <Route index element={<Index/>}/>
              <Route path="/purchase" element={<Purchase/>} />
              <Route path="/managesupplier" element={<ManageSupplier/>} />
              <Route path="/createsup"  element={<CreateSup/>}/>
              <Route path="/update/:id" element={<UpdateSup/>}/>
              <Route path="/createproduction" element={<CreacteProduction/>} />
              <Route path="/manageproduction" element={<ManageProduction/>} />
            </Route>
          </Routes>
        <RightSideber/>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
