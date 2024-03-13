import { useState } from "react"
//import Utils
import { CurrentPage } from "./Utils/CurrentPage"
//import Components
import Navbar from "@/Components/Main page/Navbar"
import Benefits from "./Components/Main page/Benefits"
import HomePage from "./Components/Main page/HomePage"
 
function App() {

  const [currentPage , setCurrentPage] = useState<CurrentPage>(
    CurrentPage.Home
  )



  return (
    <>
    <div className="App">
      <div className="bg-gray-20">
       <Navbar  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <HomePage setCurrentPage={setCurrentPage} />
       <Benefits setCurrentPage={setCurrentPage} />
      </div>
    </div>
    </>
  )
}

export default App
