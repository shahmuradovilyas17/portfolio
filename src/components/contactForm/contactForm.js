import { useContext } from "react";
import "./contactForm.scss";
import { MainContext } from "../MainContext/MainContext";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const { textObj, languageState } = useContext(MainContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_08ss0f1", "contact_form", form.current, {
        publicKey: "H4oN2m73lVfRNBsg5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-name">
        <label htmlFor="name-input">{textObj[languageState].nameForm}</label>
        <input
          type="text"
          name="from_name"
          placeholder={textObj[languageState].nameFormText}
        />
      </div>
      <div className="input-email">
        <label htmlFor="email-input">{textObj[languageState].email}</label>
        <input
          type="email"
          name="user-email"
          placeholder={textObj[languageState].emailText}
        />
      </div>
      <div className="input-message">
        <label htmlFor="message-input">{textObj[languageState].message}</label>
        <input
          type="text"
          name="message"
          placeholder={textObj[languageState].messageText}
        />
      </div>
      <button className="submit-button">{textObj[languageState].submit}</button>
    </form>
  );
};
