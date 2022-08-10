import React from "react"
export default function Location(props){
    return (
        <div className="location-proj2">
            <img alt="project 2 image" src={props.imageUrl} />
            <div className="location-details-proj2">
                <img className="location-icon-proj2" src="https://img.icons8.com/color/344/ffffff/marker--v1.png" />
                <span className="location-country-proj2">{props.location.toUpperCase()}</span>
                <span><a className="map-link-proj2" href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className="location-location-proj2">{props.title}</h1>
                <p className="location-dates-proj2">{props.startDate} - {props.endDate}</p>
                <p className="location-description-proj2">{props.description}</p>
            </div>
        </div>
    )
}