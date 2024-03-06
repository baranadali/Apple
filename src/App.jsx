import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Header from "./components/header.jsx";
import AirpodsPro from "./pages/airpods-pro.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/airpods-pro" element={<AirpodsPro/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
