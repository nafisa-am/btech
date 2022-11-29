import SignupForm from "./components/SignUp/signUp";
// import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <SignupForm />
        <Routes>
          <Route path="/">
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
