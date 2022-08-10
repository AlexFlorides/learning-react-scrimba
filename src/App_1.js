import React from "react"
import Info from "./components/Project1/Info"
import About from "./components/Project1/About"
import Interests from "./components/Project1/Interests"
import Footer from "./components/Project1/Footer"

export default function App1(){
    return (
        <div>
            <div className="app-proj1">
                <Info />
                <div className="body-comp-proj1">
                    <About />
                    <Interests />
                </div>
                <Footer />
            </div>
        </div>
    )
}