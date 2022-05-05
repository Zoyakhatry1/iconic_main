import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Registration from "./components/Registration";
import Venue from "./components/Venue";
import AuthorGuidelines from "./components/AuthorGuidelines";
import Gallery from "./components/Gallery";
import ContactPage from "./components/ContactPage";
import Keynote from "./components/Keynote";
import International from "./components/International";
import National from "./components/National";
import Members2 from "./components/Members2";

const tracks = [
  {
    heading: "Natural Language Processing Track",
    list: [
      "Information Retrieval and Personalization",
      "Question Answering",
      "Sentiment Analysis and Opinion Mining for Knowledge Applications",
      "Natural Language Generation from Structured Information and Linked Data",
      "Machine Translation techniques for Multi-lingual Knowledge",
      "Text Summarization and Generation",
      "NLP tasks for Knowledge Extraction and Representation",
      "NLP for Ontology Population and Learning",
      "NLP for the Web",
      "NLP Systems for Big Data scenarios",
    ],
  },
  {
    heading: "Cyber Security in Emerging Technologies",
    list: [
      "Security in Cloud and Fog Computing",
      "Security in Big Data, Machine Learning and Deep Leaning",
      "Security in Blockchain Technologies and Applications",
      "Security in IoT and edge cutting technologies",
      "Bioinformatics & Biometrics security",
      "Cyber security in smart Environment and Smart cities",
      "Cyber security Concerns in Industry X.0",
      "Privacy and Protection in Automation and Robotics",
      "Security and Protection in IT Outsourcing",
      "Cyber security in social media",
      "Digital Forensic in emerging Technologies",
      "Drone Cybercrime and forensic",
      "Sensor and Mobile Ad hoc Network Security",
      "Web, Multimedia and Mobile Network Security",
    ],
  },
  {
    heading: "Computational Biology/Bioinformatics",
    list: [
      "Bioinformatics and Computational Biology",
      "Biomaterials and biomedical optics",
      "Biomedical devices, sensors, and artificial organs",
      "Biomedical imaging, image processing & visualization",
      "Biomedical robotics and mechanics",
      "Biostatistics and Stochastic Models",
      "Computational evolutionary biology",
      "Computational Systems Biology",
      "Computer-based medical systems",
      "Data acquisition, normalization, analysis and visualization",
      "Genomics and Proteomics",
      "Pattern Recognition, Clustering and Classification",
      "Web Services in Bioinformatics",
    ],
  },
  {
    heading: "Big Data and Data Analytics",
    list: [
      "Big Data Analytics & Mining",
      "Machine Learning for Big Data",
      "Big Data as a Service",
      "Predictive Analytics & Simulation",
      "Big Data Search and Mining",
      "Big Data Learning and Analytics",
      "Machine Learning and AI for Big Data",
      "5G and Networks for Big Data",
    ],
  },
];
function App() {
  let scrollToTarget = (target) => {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home scrollToTarget={scrollToTarget} trackArray={tracks} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Members2 />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/venue" element={<Venue />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/keynotes" element={<Keynote />}></Route>
          <Route path="/international" element={<International />}></Route>
          <Route path="/national" element={<National />}></Route>
          <Route
            path="/submissiondetails"
            element={<AuthorGuidelines trackArray={tracks} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
