import {useState, useEffect} from "react";

function  Lifecycle() {
    const [number, setNumber] = useState(0);
    const [name, setName] =useState("Zehra");

    useEffect(() =>{
        console.log("State güncellendi.") // => sayfada gerçekleşen herhangi bir güncellemeden sonra çalışır.
    });

    useEffect(() => {
        console.log("component mount edildi.") // => sayfa ilk yüklendiğinde bir kere çalışır.
    }, []);

    useEffect(() => {
        console.log("number güncellendi.") // => number verisi her güncellendiğinde çalışır.
    }, [number]);

    useEffect(() => {
        console.log("name güncellendi.") // => name verisi her güncellendiğinde çalışır.
    }, [name]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Arttır</button>
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("Furkan")}>isim Değişikliği</button>
        </div>
    );
}

export default Lifecycle;