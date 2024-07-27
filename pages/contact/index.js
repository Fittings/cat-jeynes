import React from "react";
import styles from "./contact.module.scss";
import classNames from "classnames";

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
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h1 className="tertiary-header">Pop by for a chat</h1>
        <span className="primary-paragraph">
          For all questions and queries please reach out for a chat, can't wait
          to hear from you!
        </span>
      </div>
      <form name="contact" className={styles.form} method="POST" netlify>
        <Row>
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
              <option value="">General Enquiry</option>
              <option value="">Wedding Photoshoot</option>
              <option value="">Birthday Photoshoot</option>
              <option value="">Baby Photoshoot</option>
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
