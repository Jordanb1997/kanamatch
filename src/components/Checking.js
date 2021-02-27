import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
function Checking() {
    return (
        <div className="correct">
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />
        </div>
    );
}

export default Checking;