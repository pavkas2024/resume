import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import styles from './ContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

import ua from '../../assets/locales/ua.json';
import en from '../../assets/locales/en.json';

const ContactForm = ({ currentLang }) => {
    const data = currentLang === 'ua' ? ua : en;
    const formTexts = data.form;
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [submitting, setSubmitting] = useState(false);
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
  
      const dataToSend = new FormData();
      dataToSend.append('name', formData.name);
      dataToSend.append('email', formData.email);
      dataToSend.append('message', formData.message);
  
      try {
        const response = await fetch('https://usebasin.com/f/31ad29c6611e', {
          method: 'POST',
          body: dataToSend,
          headers: {
            Accept: 'application/json',
          },
        });
  
        if (response.ok) {
          toast.success(formTexts.success);
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error(formTexts.error);
        }
      } catch (err) {
        toast.error(formTexts.generalError);
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <>
        <form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Honeypot для спаму */}
          <input type="text" name="website" style={{ display: 'none' }} />
  
          <label className={styles.label}>
            {formTexts.name}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              autoComplete="new-name"
            />
          </label>
  
          <label className={styles.label}>
            {formTexts.email}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              autoComplete="new-email"
            />
          </label>
  
          <label className={styles.label}>
            {formTexts.message}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>
  
          <button
            type="submit"
            className={styles.button}
            disabled={submitting}
          >
            {submitting ? formTexts.sending : formTexts.send}
          </button>
        </form>
  
        <ToastContainer position="bottom-right" autoClose={3000} />
      </>
    );
  };
  
  export default ContactForm;