import React from "react"
import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import App1 from "../App_1"
import App2 from "../App_2"
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
        </Route>
      </Routes>
    </Router>
    )
}