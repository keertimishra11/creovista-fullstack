import Contact from "../models/contact.js";

// Add Contact Form Entry
export const addContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = await Contact.create({
      fullName,
      email,
      mobile,
      city
    });

    res.status(201).json({
      message: "Contact form submitted successfully",
      newContact,
    });

  } catch (err) {
    console.log("CONTACT ERROR:", err);
    res.status(500).json({ error: "Error submitting contact form", details: err });
  }
};

// Get All Contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.log("FETCH CONTACT ERROR:", err);
    res.status(500).json({ error: "Error fetching contacts" });
  }
};
