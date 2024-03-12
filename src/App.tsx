//import Components
import Navbar from "@/Components/Main page/Navbar"
import { useState } from "react"
import { CurrentPage } from "./Utils/CurrentPage"
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
       <HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
    </>
  )
}

export default App
