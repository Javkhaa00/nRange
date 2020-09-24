import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
    return (
        <div className="info">
            <div className="info--wrapper">
                <a className="info--wrapper--email" href="mailto:nRange@nrange.com?subject=To nRange&body">
                    <FontAwesomeIcon
                        style={{ paddingRight: "12px" }}
                        className="info--wrapper--envelope"
                        icon={faEnvelope}
                        size="lg" /
                    >
                    nRange@nrange.com
                </a>
            </div>
        </div>
    );
};

export default Info;