import "./styles/App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Members from "./components/Members";
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/blog" element={<Members/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
