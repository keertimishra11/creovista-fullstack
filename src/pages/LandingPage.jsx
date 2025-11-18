import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./LandingPage.css";

 const API = "https://creovista-fullstack.onrender.com";



function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [subEmail, setSubEmail] = useState("");

  // Fetch projects
  useEffect(() => {
    axios.get(`${API}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch clients
  useEffect(() => {
    axios.get(`${API}/api/clients`)
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Submit Contact Form
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/contacts/add`, contact);
      alert("Contact form submitted!");
      setContact({ fullName: "", email: "", mobile: "", city: "" });
    } catch {
      alert("Error submitting contact form");
    }
  };

  // Newsletter Submit
  const handleSubscribe = async () => {
    if (!subEmail) return alert("Enter email!");

    try {
      await axios.post(`${API}/api/subscribers/add`, { email: subEmail });
      alert("Subscribed successfully!");
      setSubEmail("");
    } catch {
      alert("Error subscribing!");
    }
  };

  return (
    <div className="landing-container">

      <Navbar />

      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <h1>We Create Modern Solutions</h1>
          <p>
            We provide professional services in design, development and digital transformation.
          </p>
        </div>
      </div>

      {/* OUR PROJECTS */}
      <h2 className="section-title">Our Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p._id} className="project-card">
          <img src={`http://localhost:5000/${p.image}`} alt="" className="project-img" />

            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <button className="project-btn">Read More</button>
          </div>
        ))}
      </div>

      {/* HAPPY CLIENTS */}
      <h2 className="section-title">Happy Clients</h2>
      <div className="client-grid">
        {clients.map((c) => (
          <div key={c._id} className="client-card">
           <img src={`http://localhost:5000/${c.image}`} alt="" className="client-img" />

            <p className="client-feedback">“{c.description}”</p>
            <h3 className="client-name">{c.name}</h3>
            <h4 className="client-role">{c.designation}</h4>
          </div>
        ))}
      </div>

      {/* CONTACT FORM */}
      <div className="contact-section">
        <div className="contact-left">
          <h2>Get a Free Consultation</h2>
          <p>Have a project in mind? Contact us and our team will reach out shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={contact.fullName}
            onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={contact.mobile}
            onChange={(e) => setContact({ ...contact, mobile: e.target.value })}
          />

          <input
            type="text"
            placeholder="City"
            value={contact.city}
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>Subscribe Newsletter</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={subEmail}
          onChange={(e) => setSubEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

    </div>
  );
}

export default LandingPage;
