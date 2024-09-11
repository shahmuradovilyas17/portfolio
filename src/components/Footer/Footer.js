import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
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
