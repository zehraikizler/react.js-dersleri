/* State => componentlerimiz üzerinde değerin değişme potansiyeli olan 
            bütün değerleri tutan JavaScript objesi olarak nitelendirilebilr.
            componentin herhangi bir anında değeri değişme potansiyeli olan 
            bir veri state olarak tanımlanır ve bu state değiştiği anda ilgili 
            component render edilerek değişim ekrana yansıtılmış olur. */

import {useState} from "react";

function State() {
    const [name, setName] = useState("Zehra");
    const [age, setAge] = useState(21);
    const [friends, setFriends] = useState(["Gizem", "Hilal"]);
    const [adress, setAdress] = useState({ title: "Adana", zip: 101010 });

    return (
        <div>
            <h1>Merhaba {name}!</h1>
            <h2>{age}</h2>

            <button onClick={() => setName("Furkan")}>Change Name</button>
            <button onClick={() => setAge(22)}>Change Age</button>

            <hr />
            <br></br>

            <h2>Friends</h2>
            {friends.map((friend, index) =>  <div key={index}>{friend}</div>)}

            <br />

            <button onClick={() => setFriends([...friends, "Zehra"])}>add new friend</button>

            <hr />
            <br></br>

            <h2>Adress</h2>
            <div>
                {adress.title} {adress.zip}
            </div>

            <br />

            <button onClick={() => setAdress({ title: "Trabzon", zip: 616161 })}>change the adress</button>

            {/* Ben obje içerisindeki title değerimi koruyup sadece zipi güncellemek istiyorsam ...adress yazarak bu işlemi sağlayabilirim. 

            <button onClick={() => setAdress({ ...adress, zip: 616161 })}>change the adress</button> */}


        </div>
    );
}

export default State;