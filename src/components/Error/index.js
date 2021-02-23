import React from 'react';
import "./style.css";

function Error() {
    return (
        <div>
            <h1 className="four_oh_four">404</h1>
            <h3 className="page_not_found">Page not found.</h3>
            <p className="error_text">
                Please select from the items in the menu.
            </p>
        </div>
    )
}

export default Error;