import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';
import {
  LinkedInIcon,
  InstagramIcon,
  GitHubIcon,
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
  SendIcon,
} from './Icons';

export default function Contact() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      await emailjs.send(
        'service_vwxh1aa',
        'template_r2agfzb',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Project Inquiry',
          message: formData.message,
        },
        'on4h5FgPaL5TbG8AR'
      );

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Automatically reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to send message. Please try emailing directly at kingsleykings016@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="connect" ref={sectionRef}>
      <h1 className={`scroll-reveal ${isInView ? 'revealed' : ''}`}>Let's Connect</h1>

      <div className="connect-box">
        {/* Left Column: Contact info & Socials */}
        <div className={`connect1 scroll-reveal ${isInView ? 'revealed' : ''}`}>
          <div className="in1">
            <h2>Get In Touch</h2>
            <p>
              Ready to bring your vision to life? Let's collaborate on creating
              something extraordinary. I'm always excited to work on innovative
              projects that push creative boundaries.
            </p>
          </div>

          <div className="in2">
            <h2>Follow Me</h2>
            <div className="follow-icon">
              <a
                href="https://www.linkedin.com/in/kingsley-richards-4217ab326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://github.com/Kingsley-Richard333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://wa.me/2349033879621"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          <div className="in3">
            <h2>Contact Info</h2>
            <div className="con-info">
              <a href="mailto:kingsleykings016@gmail.com">
                <MailIcon size={16} /> kingsleykings016@gmail.com
              </a>
              <a href="tel:+2349033879621">
                <PhoneIcon size={16} /> +2349033879621
              </a>
              <a
                href="https://www.google.com/maps/place/Ibadan,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationIcon size={16} /> Ibadan, Nigeria
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={`connect2 scroll-reveal ${isInView ? 'revealed' : ''}`}>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status.success && (
                <div className="form-feedback success">
                  Message sent successfully! I will get back to you shortly.
                </div>
              )}

              {status.error && (
                <div className="form-feedback error">
                  {status.error}
                </div>
              )}

              <button
                type="submit"
                className="send-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <SendIcon size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
