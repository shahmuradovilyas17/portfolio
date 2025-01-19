import { useContext } from "react";
import "./contactForm.scss";
import { MainContext } from "../MainContext/MainContext";

export const ContactForm = () => {
  const { textObj, languageState } = useContext(MainContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="input-email">
        <label htmlFor="email-input">{textObj[languageState].email}</label>
        <input
          type="email"
          name="email-input"
          placeholder={textObj[languageState].emailText}
        />
      </div>
      <div className="input-mobile">
        <label htmlFor="mobile-input">{textObj[languageState].mobile}</label>
        <input
          type="mobile"
          name="mobile-input"
          placeholder={textObj[languageState].mobileText}
        />
      </div>
      <div className="input-message">
        <label htmlFor="message-input">{textObj[languageState].message}</label>
        <input
          type="text"
          name="message-input"
          placeholder={textObj[languageState].messageText}
        />
      </div>
      <button className="submit-button">{textObj[languageState].submit}</button>
    </form>
  );
};
