import React, { createContext, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service1 from "./Service1";
import Contact1 from "./Contact1";
import About1 from "./About1";
import { Routes  } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  

  return(
<>
<Navbar />
<Routes>
  <Route path="/" element = {<Home />} />
  <Route path="/about" element = {<About1 />} />
  <Route path="/service" element = {<Service1 />} />
  <Route path="/contact" element = {<Contact1 />} />
  <Route path="*" element = {<Home />} />
</Routes>

<Footer />
</>
)};


export default App;
