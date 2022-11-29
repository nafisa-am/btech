import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <>
      <Router>
        {/* HEADER */}
        <Routes>
          <Route path="/" element={<LoginSignup />} />
        </Routes>
        {/* FOOTER */}
      </Router>
    </>
  );
}

export default App;
