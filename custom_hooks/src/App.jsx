import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Heading />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactInfo phoneNumber={"9305011659"} email={"keshavcool39@gmail.com"}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
