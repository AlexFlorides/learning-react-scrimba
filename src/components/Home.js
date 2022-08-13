import React from "react"

export default function Home(){
    return (
        <div className="home-page">
            <div className="home-page-items">
                <h1>HOME PAGE</h1>
                <p>Projects I created by following the course at:</p>
                <a href="https://scrimba.com/learn/learnreact">https://scrimba.com/learn/learnreact</a>
                <div className="home-page-logo">
                    <img alt="React Logo" src={process.env.PUBLIC_URL + "/logo192.png"}></img>
                </div>
            </div>
        </div>
    )
}