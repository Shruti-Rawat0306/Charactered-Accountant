import React, { useEffect, useState } from "react";

function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Replace this with your deployed backend URL
  const BACKEND_URL = "https://charactered-accountant-backend.onrender.com";

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/resource/all`);
      const data = await res.json();
      setResources(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to fetch resources from backend");
    }
  };

  const deleteResource = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resource?")) return;

    try {
      await fetch(`${BACKEND_URL}/api/resource/${id}`, { method: "DELETE" });
      setResources(resources.filter((r) => r._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete resource");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resource Requests</h1>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource._id}>
              <td>{resource.fullName}</td>
              <td>{resource.email}</td>
              <td>
                <button onClick={() => deleteResource(resource._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResourcesPage;
