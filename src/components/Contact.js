import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^(\+?\d{10,15})$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.send(
        "service_deu8ybt", // replace with your EmailJS Service ID
        "template_mb51tqa", // replace with your EmailJS Template ID
        formData,
        "lYQVpT2b0WSYHw-ZI" // replace with your EmailJS Public Key
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("FAILED...", err);
      alert("An error occurred while sending. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's connect and create something amazing
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a
              href="mailto:marwa.nasser.mohamed.abdelmatloub@gmail.com"
              className="contact-item glass"
            >
              <FaEnvelope size={24} />
              <div>
                <h3>Email</h3>
                <p>marwa.nasser.mohamed.abdelmatloub@gmail.com</p>
              </div>
            </a>

            <a href="tel:+201010560217" className="contact-item glass">
              <FaPhone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+20 101 056 0217</p>
              </div>
            </a>

            <a href="#home" className="contact-item glass">
              <FaMapMarkerAlt size={24} />
              <div>
                <h3>Location</h3>
                <p>Minya, Egypt</p>
              </div>
            </a>

            <div className="contact-socials glass">
              <h3>Follow Me</h3>
              <div className="socials-grid">
                <a
                  href="https://github.com/marwa-nasser-mohamed-abdelmatloub"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/marwa-nasser-mohamed-abdelmatloub"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/MarwaNasser33?t=l4WFRF_LIWgGjIzrI3Hqbw&s=09"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.facebook.com/marwa.nasser3333"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="error">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="success-msg">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
