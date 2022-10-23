import React from "react"

export default function Header() {
    return (
        <header className="header-proj3">
            <img
                alt="Header Troll Face"
                src={process.env.PUBLIC_URL + "/troll-face.png"}
                className="header-image-proj3"
            />
            <h2 className="header-title-proj3">Meme Generator</h2>
            <h4 className="header-subtitle-proj3">React Course - Project 3</h4>
        </header>
    )
}