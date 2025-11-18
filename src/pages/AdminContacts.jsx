import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.log("Error fetching contacts:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Form Responses</h2>

      {contacts.length === 0 ? (
        <p>No contact entries found.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", marginTop: "15px" }}
        >
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.fullName}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminContacts;
