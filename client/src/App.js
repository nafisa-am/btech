// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        {/* HEADER */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="loginSignup" element={<LoginSignup />} />
        </Routes>
        {/* FOOTER */}
      </Router>
    </>
  );
}

export default App;
