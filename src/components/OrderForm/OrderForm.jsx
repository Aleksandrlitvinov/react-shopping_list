// FormComponent.js
import React, {useState} from 'react';
import styles from './orderForm.module.scss'

const OrderForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Event handler to update form data
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any actions with the form data (e.g., send it to the server)
    console.log('Form data to be sent:', formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <h2 className={styles.title}>Fill in the form</h2>
      <div className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className={styles.label}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your e-mail"
          required
        />
      </div>
      <div className={styles.label}>
        <textarea
          className={styles.input}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        />
      </div>
      <div className={styles.buttons}>
        <button className="button pay-btn" type="submit">Send</button>
        <button className="button pay-btn" type="submit">Cancel</button>
      </div>

    </form>
  );
};

export default OrderForm;
