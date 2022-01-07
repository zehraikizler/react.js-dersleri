import {useState, useEffect} from "react";

import "./style/style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Zehra",
            phone_number: 123123
        },
        {
            fullname: "Furkan",
            phone_number: 585858
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts;