import React from "react";
import { Activities } from "./component/Activities";
import { Booking } from "./component/Booking";
import { Contact } from "./component/Contact";
import { Gallery } from "./component/Gallery";
import { Hero } from "./component/Hero";
import { NavBar } from "./component/NavBar";
import { TopBar } from "./component/TopBar";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Hero/>
    <Activities/>
    <Booking/>  
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
