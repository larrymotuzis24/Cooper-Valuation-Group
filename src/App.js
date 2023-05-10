import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Newsletters from "./Components/Newsletters";
import Press from "./Components/Press";
import ContactPage from "./Components/ContactPage";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
