import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TeamTheme from "./Components/TeamTheme";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <main className="mb-4 mt-4 rounded">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route
              path="/profile"
              element={
                <>
                  <Navbar />
                  <Profile />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
