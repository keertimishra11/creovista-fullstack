import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/subscribers`)
      .then((res) => setSubscribers(res.data))
      .catch((err) => console.log("Error fetching subscribers:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subscribed Users</h2>

      {subscribers.length === 0 ? (
        <p>No subscribers found.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", marginTop: "15px" }}
        >
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed On</th>
            </tr>
          </thead>

          <tbody>
            {subscribers.map((s) => (
              <tr key={s._id}>
                <td>{s.email}</td>
                <td>{new Date(s.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminSubscribers;
