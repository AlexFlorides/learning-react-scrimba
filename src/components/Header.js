import React from "react"
import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import App1 from "../App_1"
import App2 from "../App_2"
import App3 from "../App_3"
import App4 from "../App_4"
import App5 from "../App_5"
import Home from "./Home";
import Layout from "../Layout"

export default function Header() {
    return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="business-card" element={<App1 />} />
            <Route path="travel-journal" element={<App2 />} />
            <Route path="meme-generator" element={<App3 />} />
            <Route path="notes-app" element={<App4 />} />
            <Route path="tenzies-game" element={<App5 />} />
        </Route>
      </Routes>
    </Router>
    )
}