import "./styles/App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Registration from "./components/Registration";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import AuthorGuidelines from "./components/AuthorGuidelines";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/blog" element={<Members/>}></Route>
         <Route path="/registration" element={<Registration/>}></Route>
         <Route path="/venue" element={<Venue />}></Route>
         <Route path="/submissiondetails" element={<AuthorGuidelines />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
