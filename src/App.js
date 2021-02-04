import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const data = await res.json();
      setUsers(data.data);
    };

    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials users={users} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
