import { useState } from "react"
//import Utils
import { CurrentPage } from "./Utils/CurrentPage"
//import Components
import Navbar from "@/Components/Main page/Navbar"
import Benefits from "./Components/Main page/Benefits"
import HomePage from "./Components/Main page/HomePage"
import OurClasses from "./Components/Main page/OurClasses"
import ContactUs from "./Components/Main page/ContactUs"
 
function App() {

  const [currentPage , setCurrentPage] = useState<CurrentPage>(
    CurrentPage.Home
  )

  return (
    <>
    <div className="App">
       <Navbar  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <HomePage setCurrentPage={setCurrentPage} />
       <Benefits setCurrentPage={setCurrentPage} />
       <OurClasses setCurrentPage={setCurrentPage} />
       <ContactUs setCurrentPage={setCurrentPage}/>
    </div>
    </>
  )
}

export default App
