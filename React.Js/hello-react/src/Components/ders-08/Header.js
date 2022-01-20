import React from "react";

function Header({number}) {

    console.log("header component re-rendered")
    
    return (
        <div>
            <div>Number - {number} </div>
        </div>
    );
}

export default React.memo(Header);