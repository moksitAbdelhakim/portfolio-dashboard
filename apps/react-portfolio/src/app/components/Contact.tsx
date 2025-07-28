import { Button } from '@moksit-org/ui';
import React, { useState } from 'react';

/**
 * Contact form component.
 * Name and email fields are displayed in the same row,
 * message field is full width below.
 * @returns {JSX.Element} Contact form UI
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * Handles input changes for controlled fields.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement submission logic (e.g., API call)
    // Why: Prevent default form behavior and allow custom handling
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" id="contact">
      <h2 className="text-2xl font-bold mb-3 mt-12">Contact Me</h2>
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-8">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block font-medium text-input-foreground"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-border rounded-md  p-4 bg-input-background"
              autoComplete="name"
              placeholder="Your Name"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block font-medium text-input-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-border rounded-md  p-4 bg-input-background"
              autoComplete="email"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-input-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-1 block w-full border border-border rounded-md  p-4 bg-input-background"
          />
        </div>
        <Button
          size="lg"
          variant="default"
          className="h-12 px-4 mr-0 ml-auto bg-primary"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default Contact;
