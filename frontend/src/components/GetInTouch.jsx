import { useState } from 'react';
import styles from '../styles/GetInTouch.module.css';
import { FiMapPin, FiMail ,FiPhone} from 'react-icons/fi';
import LineDivider from './LineDivider';
import axios from 'axios';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    organization: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data being sent:", formData);

      const response = await axios.post('/api/get-in-touch', formData);
      console.log("Response from backend:", response);

      setStatusMessage("Form submitted successfully. We will get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        organization: '',
        message: ''
      });
    } catch (error) {
      console.error("Error during form submission:", error);

      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in request setup:", error.message);
      }

      setStatusMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className={styles.techStackContainer}>
      <h1 className={styles.heading}>Get in Touch</h1>
      <LineDivider />
      <div className={styles.container}>
        
        {/* Left Section */}
        <div className={styles.leftSection}>
          <p className={styles.sure}>
            Fill up the form and I will get back to you within 24 hours
          </p>
          <div className={styles.infoItem}>
            <FiMapPin className={styles.icon} />
            <span>Hyderabad</span>
          </div>
          <div className={styles.infoItem}>
            <FiPhone className={styles.icon} />
            <span>8522894247</span>
          </div>
          <div className={styles.infoItem}>
            <FiMail className={styles.icon} />
            <span>saiteja.b.works@gmail.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.inputField}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputField}
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={styles.inputField}
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Course Selection */}
            <select
              name="course"
              className={styles.inputField}
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="IIT JEE FOUNDATION">IIT JEE FOUNDATION</option>
              <option value="Maths For EAMCET">Maths For EAMCET</option>
              <option value="ECET">ECET</option>
              <option value="Maths For SAT">Maths For SAT</option>
              <option value="Maths for 11th , 12th Boards">Maths for 11th , 12th Boards</option>
              <option value="Maths for <= 10th Boards">Maths for ≤ 10th Boards</option>
              <option value="Maths for <= 10th Boards">Any Other[Mention in Message]</option>
            </select>

            <input
              type="text"
              name="organization"
              placeholder="Institute / Student"
              className={styles.inputField}
              value={formData.organization}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message"
              className={styles.inputField}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>

          {statusMessage && (
            <p className={styles.statusMessage}>{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
