import React from "react";

function Header({number , data}) {

    console.log("header component re-rendered")
    
    return (
        <div>
            <div>Number - {number} </div>
            <code>
                {JSON.stringify(data)}
            </code>
        </div>
    );
}

export default React.memo(Header);