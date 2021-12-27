// toplama işlemi fonksiyon olarak yazabiliriz.
/*function topla(a, b) {
    return a + b;
}*/

// toplama işlemini değişken tanımlayım fonksiyonu değişkene eşitleyebiliriz.

/*const topla = function topla(a, b){
    return a+b;
}*/

// toplama işlemini fat arrow şeklinde yazabiliriz.
const topla = (a, b) => a + b;

// hello yazdırma 
/*export const hello = () => {
    console.log("Hello!");
}*/

// hello fonksiyonumuza parametre ekliyoruz.

const hello = (name) => {
    console.log("Hello!" + name);
};


// Biz aynı zamanda textleri, objeleri ve dizileride export edebiliyoruz.

const text = "text";

const user = {
    name: "Zehra",
    surname: "İkizler",
};

const users = [
    {
        name: "Zehra",
        surname: "İkizler",
    },
    {
        name: "Furkan",
        surname: "Karakuzu",
    }  
];


// export default topla;

export {topla, hello, text, user, users}

// ayrı ayrı yazmak yerine;

// export {hello, topla}