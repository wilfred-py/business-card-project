import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <FontAwesomeIcon
                icon={faTwitter}
                className="footer-icon fa-xl fa-bounce"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                icon={faFacebook}
                className="footer-icon fa-xl fa-bounce"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                icon={faInstagram}
                className="footer-icon fa-xl fa-bounce"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                icon={faGithub}
                className="footer-icon fa-xl fa-bounce"
            ></FontAwesomeIcon>
        </footer>
    );
}
