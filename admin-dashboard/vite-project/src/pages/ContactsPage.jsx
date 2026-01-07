import React, { useEffect, useState } from "react";

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Replace with your deployed backend URL
  const BACKEND_URL = "https://charactered-accountant-backend.onrender.com";

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact/all`);
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to fetch contacts from backend");
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await fetch(`${BACKEND_URL}/api/contact/${id}`, { method: "DELETE" });
      setContacts(contacts.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete contact");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Contacts</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th><th>Last Name</th><th>Email</th>
            <th>Contact</th><th>Service</th><th>Message</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c._id}>
              <td>{c.firstName}</td><td>{c.lastName}</td><td>{c.email}</td>
              <td>{c.contact}</td><td>{c.service}</td><td>{c.message}</td>
              <td>
                <button onClick={() => deleteContact(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsPage;
