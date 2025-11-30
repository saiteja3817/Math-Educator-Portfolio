// GetInTouch.controller.js
import GetInTouch from '../models/GetInTouch.model.js';

// Function to handle form submission
export const submitForm = async (req, res) => {
  try {
    const { name, email, phone, course, organization, message } = req.body;

    // Create a new submission document
    const newSubmission = new GetInTouch({
      name,
      email,
      phone,
      course,
      organization,
      message
    });

    await newSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error("Error saving GetInTouch form:", error);
    res.status(500).json({ message: 'Error submitting form', error });
  }
};
