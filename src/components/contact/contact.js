import { useContext } from "react";
import { ContactForm } from "../contactForm/contactForm";
import "./contact.scss";
import { MainContext } from "../MainContext/MainContext";

export const Contact = () => {
  const { themeState } = useContext(MainContext);

  return (
    <div className="contact-menu-wrapper" id={themeState ? "dark" : "light"}>
      <div className="contact-menu-inner">
        <div className="contact-menu-title">Get In Touch</div>
        <div className="contact-menu-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
