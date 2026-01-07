import React, { useEffect, useState } from "react";

function JobApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobapplication/all");
      const data = await res.json();
      setApplications(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job application?")) return;

    try {
      await fetch(`http://localhost:5000/api/jobapplication/${id}`, { method: "DELETE" });
      setApplications(applications.filter((app) => app._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Job Applications</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Resume / CV</th>
            <th>Position Applied</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.fullName}</td>
              <td>{app.email}</td>
              <td>{app.contact}</td>
              <td>
                {app.resumeUrl ? (
                  <a href={app.resumeUrl} target="_blank" rel="noreferrer">View</a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>{app.position}</td>
              <td>
                <button onClick={() => deleteApplication(app._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobApplicationsPage;
