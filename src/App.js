import React from "react";


import TopNavigation from "./Components/TopNavigation.js"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Poems from "./pages/Poems";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Reidun from "./pages/About"

const App = () => {
  return (<div className={"min-h-screen bg-gradient-to-b from-dark-brown to-light-brown"}>
            <div className="mx-10">
                <TopNavigation />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/poems"} element={<Poems />} />
                    <Route path={"/events"} element={<Events />} />
                    <Route path={"/about"} element={<Reidun />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </div>
      </div>
  );
}



export default App;
