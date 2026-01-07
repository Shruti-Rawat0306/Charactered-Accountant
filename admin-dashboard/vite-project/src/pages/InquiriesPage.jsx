import React, { useEffect, useState } from "react";

function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Replace with your deployed backend URL
  const BACKEND_URL = "https://charactered-accountant-backend.onrender.com";

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries/all`);
      const data = await res.json();
      setInquiries(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to fetch inquiries from backend");
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await fetch(`${BACKEND_URL}/api/inquiries/${id}`, { method: "DELETE" });
      setInquiries(inquiries.filter((inq) => inq._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete inquiry");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Inquiries</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Service Interested</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inq) => (
            <tr key={inq._id}>
              <td>{inq.fullName}</td>
              <td>{inq.email}</td>
              <td>{inq.contact}</td>
              <td>{inq.message}</td>
              <td>{inq.service}</td>
              <td>
                <button onClick={() => deleteInquiry(inq._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InquiriesPage;
