import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (abhi blank, main next files dunga)
import LandingPage from "./pages/LandingPage";
import AdminProjects from "./pages/AdminProjects";
import AdminClients from "./pages/AdminClients";
import AdminContacts from "./pages/AdminContacts";
import AdminSubscribers from "./pages/AdminSubscribers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin Panel Pages */}
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/subscribers" element={<AdminSubscribers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
