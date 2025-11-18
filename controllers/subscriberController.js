import Subscriber from "../models/subscriber.js";

// Add New Subscriber
export const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if already exists
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    const newSubscriber = await Subscriber.create({ email });

    res.status(201).json({
      message: "Subscribed successfully!",
      newSubscriber,
    });

  } catch (err) {
    console.log("SUBSCRIBER ERROR:", err);
    res.status(500).json({ error: "Subscription failed" });
  }
};

// Get all subscribers
export const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.status(200).json(subs);
  } catch (err) {
    res.status(500).json({ error: "Error fetching subscribers" });
  }
};
