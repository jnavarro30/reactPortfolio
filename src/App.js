import React, { useState } from "react";
// styles
import "./styles/app.scss";
// components 
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [openNav, setOpenNav] = useState(false);

  const closeNavHandler = (e) => {
    if (!/nav/.test([...e.target.classList])) setOpenNav(false); 
  }

  return (
    <div className="container" onClick={closeNavHandler}>
      <Header />
      <Nav openNav={openNav} setOpenNav={setOpenNav}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
