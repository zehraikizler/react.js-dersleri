import {useState} from "react";

function InputExample() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const onChanegeName = (event) => setName(event.target.value);
    const onChanegeSurname = (event) => setSurname(event.target.value);

    return (
        <div>
            <hr />
            <br></br>

            <label>
                Name: <br/>
                <input value={name} onChange={onChanegeName} />
            </label>

            <br></br>

            <label>
                Surname: <br/>
                <input value={surname} onChange={onChanegeSurname} />
            </label>

            <div>
                {name} {surname}
            </div>

            <br></br>
        </div>
    );
}

export default InputExample;