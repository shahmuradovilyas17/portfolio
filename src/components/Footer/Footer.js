import { useContext } from "react";
import "./Footer.scss";
import { MainContext } from "../MainContext/MainContext";

export const Footer = () => {
  const { themeState } = useContext(MainContext);

  return (
    <div className="footer-wrapper" id={themeState ? "dark" : "light"}>
      <div className="footer-inner">
        <ul>
          <li>
            <a
              href="https://www.figma.com/design/tPPDZCBPTZQlLq9AjW47E5/🎨-Personal-Portfolio-Template-(Community)?node-id=203-55&t=MZjfnMDhZcguEYFQ-0"
              target="_blank"
            >
              Figma Template
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ilyas-shahmuradov/"
              className="linkedin-link"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jensenackles/"
              className="insta-link"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
