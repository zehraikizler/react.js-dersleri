import {useState} from "react";

function Inputs() {

    const [form, setForm] = useState({ name: "", surname: "" });

    const onChanegeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <hr />
            <br></br>

            <label>
                Name: <br/>
                <input name="name" value={form.name} onChange={onChanegeInput} />
            </label>

            <br></br>

            <label>
                Surname: <br/>
                <input name="surname" value={form.surname} onChange={onChanegeInput} />
            </label>

            <div>
                {form.name} {form.surname}
            </div>

            <br></br>
        </div>
    );
}

export default Inputs;