import { useState } from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";

import Footer from "./components/Footer.jsx";

import "./App.css"; // Import global styles
import Menubar from "./components/Menubar.jsx";
import Feeds from "./components/Feeds.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("feed");

  const renderSection = () => {
    switch (activeSection) {
      case "feed":
        return <Feeds />;
      case "about":
        return <About />;
      case "project":
        return <Projects />;
      case "contact":
        return <Contact />;
    }
  };
  return (
    <div className="app">
      <NavigationBar />
      <div className="container">
        <Header />
        <Menubar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        {renderSection()}
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
