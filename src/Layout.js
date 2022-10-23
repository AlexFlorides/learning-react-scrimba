import React from "react"
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <header className="header">
            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/business-card">Business Card</Link>
            <Link className="button" to="/travel-journal">Travel Journal</Link>
            <Link className="button" to="/meme-generator">Meme Generator</Link>
        </header>
        <Outlet />
    </div>
  )
}