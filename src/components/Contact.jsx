import React from 'react';
import { motion } from "framer-motion";
import '../css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me :-
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out to me anytime. I’d love to connect with you!
      </motion.p>

      <motion.div
        className="contact-details"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p><strong>Name:</strong> Raju Yadav</p>
        <p><strong>Email:</strong> rajuyadav@example.com</p>
        <p><strong>Phone:</strong> +91 9737606648</p>
      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.input 
          type="text" 
          placeholder="Your Name" 
          required
          whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
        />
        <motion.input 
          type="email" 
          placeholder="Your Email" 
          required
          whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
        />
        <motion.textarea 
          rows="5" 
          placeholder="Your Message" 
          required
          whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: "#007bff", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
