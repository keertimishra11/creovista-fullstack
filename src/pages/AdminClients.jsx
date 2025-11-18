import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function AdminClients() {
  const [client, setClient] = useState({
    name: "",
    description: "",
    designation: "",
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a client image");
      return;
    }

    const formData = new FormData();
    formData.append("name", client.name);
    formData.append("description", client.description);
    formData.append("designation", client.designation);
    formData.append("image", image);

    try {
      await axios.post(`${API}/api/clients/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Client Added Successfully!");

      setClient({
        name: "",
        description: "",
        designation: "",
      });
      setImage(null);

    } catch (err) {
      console.log(err);
      alert("Error adding client");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Client</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "350px" }}
      >
        <label>Client Name</label>
        <input
          type="text"
          placeholder="Enter client name"
          value={client.name}
          onChange={(e) =>
            setClient({ ...client, name: e.target.value })
          }
        />

        <label style={{ marginTop: "10px" }}>Client Description</label>
        <textarea
          placeholder="Enter client description"
          value={client.description}
          onChange={(e) =>
            setClient({ ...client, description: e.target.value })
          }
        ></textarea>

        <label style={{ marginTop: "10px" }}>Designation</label>
        <input
          type="text"
          placeholder="CEO, Developer, Designer..."
          value={client.designation}
          onChange={(e) =>
            setClient({ ...client, designation: e.target.value })
          }
        />

        <label style={{ marginTop: "10px" }}>Client Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            style={{
              width: "200px",
              marginTop: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
            }}
          />
        )}

        <button
          type="submit"
          style={{ marginTop: "15px", padding: "10px", cursor: "pointer" }}
        >
          Add Client
        </button>
      </form>
    </div>
  );
}

export default AdminClients;
