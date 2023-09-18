import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home"
import Episodes from "./Pages/Episodes"
import Location from "./Pages/Location"
import CardDetails from "./components/Cards/CardDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/:id" element={<CardDetails />} />
         <Route path="/episodios" element={<Episodes />} />
         <Route path="/episodios/:id" element={<CardDetails />} />
         <Route path="/ubicacion" element={<Location />} />
         <Route path="/ubicacion/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
