import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const envelope_icon = <FontAwesomeIcon icon={faEnvelope} />;
const linkedin_icon = <FontAwesomeIcon icon={faLinkedin} />;

export default function Info() {
    return (
        <div>
            <div id="info-section">
                <img
                    className="info-photo"
                    src="./src/assets/Professional Photo.jpg"
                />
                <h1>Wilfred Chen</h1>
                <h2>Frontend Developer</h2>
                <h3>WilfredChen1@gmail.com</h3>
            </div>
            <div className="cta-buttons">
                <button className="cta-email-button">
                    {envelope_icon} Email
                </button>
                <button className="cta-linkedin-button">
                    {linkedin_icon} LinkedIn
                </button>
            </div>
        </div>
    );
}
