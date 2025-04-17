import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PassengerPage from "./pages/PassengerPage";
import StaffPage from "./pages/StaffPage";
import AdminPage from "./pages/AdminPage";
import AircraftSystem from "./components/AircraftSystem";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/passenger" element={<PassengerPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/aircraft" element={<AircraftSystem />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
