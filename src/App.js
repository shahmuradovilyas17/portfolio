import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { MainContextProvider } from "./components/MainContext/MainContextProvider/MainContextProvider";
import { Header } from "./components/Header/Header";
export const App = () => {
  return (
    <>
      <MainContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </MainContextProvider>
    </>
  );
};
