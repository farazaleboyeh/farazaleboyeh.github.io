import { useState } from 'react';
import styles from './Form.module.css'
import { div } from 'framer-motion/client';

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "43b8d720-11f9-46ec-a814-b2e2badea7ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className={styles.formParent}>
      <p>Contact</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="name" id="name" required placeholder="Name *"/>
        <input type="email" name="email" required placeholder="Email *"/>
        <textarea name="message" required placeholder="Message *"></textarea>
        <button type="submit">Send</button>
        <span>{result}</span>
      </form>
    </div>
  );
}