import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function AdminProjects() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a project image");
      return;
    }

    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("image", image);

    try {
      const res = await axios.post(`${API}/api/projects/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project Added Successfully!");

      setProject({ name: "", description: "" });
      setImage(null);
    } catch (err) {
      console.log(err);
      alert("Error adding project");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Project</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "350px" }}
      >
        <label>Project Name</label>
        <input
          type="text"
          placeholder="Enter project name"
          value={project.name}
          onChange={(e) =>
            setProject({ ...project, name: e.target.value })
          }
        />

        <label style={{ marginTop: "10px" }}>Project Description</label>
        <textarea
          placeholder="Enter project description"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        ></textarea>

        <label style={{ marginTop: "10px" }}>Project Image</label>
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
          Add Project
        </button>
      </form>
    </div>
  );
}

export default AdminProjects;
