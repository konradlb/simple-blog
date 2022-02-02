import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/view-post/:slug" element={<ViewPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
