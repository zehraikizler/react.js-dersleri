import {useState, useEffect} from "react";

import axios from "axios";

function Fetching() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // FETCH KULLANIMI

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    //     .catch((e) => console.log(e))
    //     .finally(() => setIsLoading(false))
    // }, []) 

    // AXİOS KULLANIMI

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }, []) 

    return (
        <div style={{ textAlign: "center", color: "red"}}>
            <h1>USERS</h1>

            {isLoading && <div> Loading... </div>}

            {
                users.map((user) => <div key={user.id}> {user.name} </div>)
            }
        </div>
    );
}

export default Fetching;