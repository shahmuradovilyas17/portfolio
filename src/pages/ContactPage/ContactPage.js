import { useContext } from "react";
import { Contact } from "../../components/contact/contact";
import { MainContext } from "../../components/MainContext/MainContext";

export const ContactPage = () => {
  const { themeState } = useContext(MainContext);
  return (
    <div
      style={{ padding: "110px 0 110px 0" }}
      id={themeState ? "dark" : "light"}
    >
      <Contact />
    </div>
  );
};
