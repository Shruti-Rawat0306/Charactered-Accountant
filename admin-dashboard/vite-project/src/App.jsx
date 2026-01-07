import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import JobApplicationsPage from "./pages/JobApplicationsPage";
import InquiriesPage from "./pages/InquiriesPage";
import ContactsPage from "./pages/ContactsPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route path="jobapplications" element={<JobApplicationsPage />} />
          <Route path="inquiries" element={<InquiriesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
