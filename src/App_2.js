import React from "react"
import Navbar from "./components/Project2/Navbar"
import Location from "./components/Project2/Location"
import data from "./components/Project2/data"

export default function App2(){
    
    const locations = data.map( x => {
        return (
            <Location
                key = {x.id}
                {...x}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            {locations}
        </div>
    )
}