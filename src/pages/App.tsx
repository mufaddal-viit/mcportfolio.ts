
import "../styles/App.css";
import Home from "./Home";
import Layout from "../components/Layout";

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
