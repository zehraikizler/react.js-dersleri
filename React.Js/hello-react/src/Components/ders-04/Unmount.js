import {useState, useEffect} from "react";

function  Unmount() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("component mount edildi.") // => sayfa ilk yüklendiğinde bir kere çalışır.

        const interval = setInterval(() => {
            setNumber((n) => n+1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("number güncellendi.") // => number verisi her güncellendiğinde çalışır.
    }, [number]);


    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Arttır</button>                                
        </div>
    );
}

export default Unmount;