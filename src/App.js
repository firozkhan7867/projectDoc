import "./App.css";
// import LoginPage from "../src/components/LoginPage";
// import SignupPage from "../src/components/SignupPage";
// import PatientsList from "./components/PatientsList";
import HomePage from "../src/components/HomePage";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App  ">
      <Router>

      <Navbar/>
      
      <HomePage />


      </Router>
        {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <PatientsList /> */}
      
    </div>
  );
}

export default App;
