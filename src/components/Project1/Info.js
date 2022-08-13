import React from "react"

export default function Info() {
    return (
        <div>
            {/* https://i.pinimg.com/474x/01/cc/b4/01ccb4ca08573327ab3cbff9fcc973ec.jpg */}
            <img alt="Info Profile" className="info-img-proj1" src={process.env.PUBLIC_URL + "/profile_picture.png"} />
            <h3 className="info-name-proj1">Alexandros Florides</h3>
            <h4 className="info-position-proj1">Software Developer</h4>
            <p className="info-email-proj1">alexandrosflorides@gmail.com</p>
            <div className="info-btns-proj1">
                <a href="mailto:alexandrosflorides@gmail.com"><button className="info-email-btn-proj1" type="button">Email</button></a>
                <a href="https://www.linkedin.com/in/alexandros-florides/"><button className="info-linkedin-btn-proj1" type="button">LinkedIn</button></a>
            </div>
        </div>
    )
}