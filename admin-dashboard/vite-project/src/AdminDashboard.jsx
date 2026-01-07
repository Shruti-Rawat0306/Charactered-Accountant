import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const collections = [
    { name: "Job Applications", api: "jobapplication" },
    { name: "Inquiries", api: "inquiries" },
    { name: "Contacts", api: "contact" },
    { name: "Resources", api: "resource" },
  ];

  const [selected, setSelected] = useState(collections[0]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with your deployed backend URL from Render
  const BACKEND_URL = "https://charactered-accountant-b.onrender.com";

  useEffect(() => {
    fetchData(selected.api);
  }, [selected]);

  const fetchData = async (api) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/${api}/all`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to fetch data from backend");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;

    try {
      await fetch(`${BACKEND_URL}/api/${selected.api}/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  if (loading)
    return <p style={{ padding: "20px", fontSize: "18px" }}>Loading...</p>;

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#3E2D94",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#FFD700" }}>Collections</h2>
        {collections.map((col) => (
          <button
            key={col.api}
            onClick={() => setSelected(col)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: selected.api === col.api ? "bold" : "normal",
              backgroundColor: selected.api === col.api ? "#FFD700" : "#5C4DB1",
              color: selected.api === col.api ? "#3E2D94" : "#fff",
              transition: "0.2s",
            }}
          >
            {col.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", background: "#F6EFF9" }}>
        <h1 style={{ marginBottom: "20px", color: "#3E2D94" }}>Admin Dashboard</h1>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: "#3E2D94", color: "white", textAlign: "left" }}>
              {data[0] &&
                Object.keys(data[0])
                  .filter((key) => key !== "__v" && key !== "_id")
                  .map((key) => (
                    <th key={key} style={{ padding: "12px" }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                  ))}
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item._id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#EAE8F4" : "#fff",
                  transition: "0.2s",
                }}
              >
                {Object.keys(item)
                  .filter((key) => key !== "__v" && key !== "_id")
                  .map((key) => (
                    <td key={key} style={{ padding: "10px" }}>
                      {item[key]}
                    </td>
                  ))}
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => handleDelete(item._id)}
                    style={{
                      background: "#FF4C4C",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      marginRight: "6px",
                      fontWeight: "bold",
                    }}
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
