import {Footer, Header} from "./Components/index/index"
import {Outlet} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
