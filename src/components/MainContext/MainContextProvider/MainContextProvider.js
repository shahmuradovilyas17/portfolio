import { useState } from "react";
import { MainContext } from "../MainContext";

export const MainContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(true);
  const [languageState, setLanguageState] = useState("EN");

  const textObj = {
    EN: {
      logo: "PortfolioSite",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      name: "Shakhmuradov Ilyas",
      desc: "FrontEnd Developer. Student in National Aviation Academy of Azerbaijan",
      touch: "Get in touch",
      email: "Email",
      emailText: "Please enter your email",
      mobile: "Mobile",
      mobileText: "Please enter your mobile number",
      message: "Message",
      messageText: "Please enter your message",
      submit: "Submit",
      skills: "Skills",
      inkHouseText:
        "online store selling paintings from countries such as France, Germany and England",
      furnikingText: "online store selling various home furniture",
    },
    AZ: {
      logo: "PortfolioSaytı",
      home: "Ana Səhifə",
      about: "Haqqımda",
      projects: "Layihələr",
      contact: "Əlaqə",
      name: "Şahmuradov İlyas",
      desc: "FrontEnd Developer. Azərbaycan Milli Aviasiya Akademiyasında Tələbə",
      touch: "Əlaqə saxla",
      email: "Elektron poçt",
      emailText: "Zəhmət olmasa elektron poçtunuzu daxil edin",
      mobile: "Mobil",
      mobileText: "Zəhmət olmasa mobil nömrənizi daxil edin",
      message: "Mesaj",
      messageText: "Zəhmət olmasa mesajınızı daxil edin",
      submit: "Göndər",
      skills: "Bacarıqlar",
      inkHouseText:
        "Fransa, Almaniya və İngiltərə kimi ölkələrdən rəsmlər satan onlayn mağaza",
      furnikingText: "Müxtəlif ev mebeli satan onlayn mağaza",
    },
    RU: {
      logo: "СайтПортфолио",
      home: "Главная",
      about: "О себе",
      projects: "Проекты",
      contact: "Контакты",
      name: "Шахмурадов Ильяс",
      desc: "FrontEnd Developer. Студент Национальной Авиационной Академии Азербайджана",
      touch: "Связаться",
      email: "Электронная почта",
      emailText: "Пожалуйста, введите свою электронную почту",
      mobile: "Мобильный",
      mobileText: "Пожалуйста, введите свой мобильный номер",
      message: "Сообщение",
      messageText: "Пожалуйста, введите свое сообщение",
      submit: "Отправить",
      skills: "Навыки",
      inkHouseText:
        "онлайн-магазин, продающий картины из стран, таких как Франция, Германия и Англия",
      furnikingText: "онлайн-магазин, продающий различную домашнюю мебель",
    },
  };
  return (
    <MainContext.Provider
      value={{
        themeState,
        setThemeState,
        languageState,
        setLanguageState,
        textObj,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
