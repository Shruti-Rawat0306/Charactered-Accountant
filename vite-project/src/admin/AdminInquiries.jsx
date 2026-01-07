import { useEffect, useState } from "react";
import API from "../api/api"; // adjust path if needed

function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await API.get("/api/inquiries"); // Render-ready API call
        setInquiries(res.data);
      } catch (error) {
        console.error("Failed to fetch inquiries:", error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Inquiries</h2>

      {inquiries.length === 0 && <p>No inquiries yet.</p>}

      {inquiries.map((item) => (
        <div
          key={item._id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <p>
            <b>Name:</b> {item.firstName} {item.lastName}
          </p>
          <p>
            <b>Contact:</b> {item.contactNumber}
          </p>
          <p>
            <b>Email:</b> {item.email}
          </p>
          <p>
            <b>Service:</b> {item.service}
          </p>
          <p>
            <b>Message:</b> {item.message}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AdminInquiries;
