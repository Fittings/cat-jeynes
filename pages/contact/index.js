"use client";

import React from "react";
import styles from "./contact.module.scss";
import classNames from "classnames";

const CONTACT_FORM = "contact";

const Row = ({ children }) => {
  return <p className={styles.row}>{children}</p>;
};

const FormItem = ({ children, label }) => {
  return (
    <label className={classNames(styles.formItem, "primary-paragraph")}>
      {label}
      {children}
    </label>
  );
};

const Contact = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    await fetch("/__contact-form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    // Success & error handling should come here
  };

  /** IMPORTANT: Make sure `__contact-form.html` has the same form items. Otherwise submission will not work */
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h1 className="tertiary-header">Pop by for a chat</h1>
        <span className="primary-paragraph">
          For all questions and queries please reach out for a chat, can't wait
          to hear from you!
        </span>
      </div>
      <form
        name={CONTACT_FORM}
        className={styles.form}
        netlify
        onSubmit={handleFormSubmit}
      >
        <Row>
          <input type="hidden" name="form-name" value={CONTACT_FORM} />
          <FormItem label="First Name">
            <input required type="text" name="first-name" />
          </FormItem>
          <FormItem label="Last Name">
            <input type="text" name="last-name" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Email">
            <input required type="email" name="email" />
          </FormItem>
        </Row>
        <Row>
          <FormItem label="Service">
            <select name="service" id="service">
              <option value="general">General Enquiry</option>
              <option value="wedding">Wedding Photoshoot</option>
              <option value="birthday">Birthday Photoshoot</option>
              <option value="baby">Baby Photoshoot</option>
            </select>
          </FormItem>
        </Row>
        <Row>
          <button type="submit">Send</button>
        </Row>
      </form>
    </div>
  );
};

export default Contact;
