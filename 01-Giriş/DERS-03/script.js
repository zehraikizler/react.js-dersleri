
// 2 saniye sonra konsolda merhaba yazdırıyor.
// setTimeout(()=>{
//     console.log("merhaba");
// }, 2000);

// Her saniyede sonsuza kadar çalışır.

// setInterval(()=>{
//     console.log("Her saniye çalışacağım.")
// }, 1000);

// parametre olarak bir fonksiyon alıp o fonksiyonu callback fonksiyon olarak çağırıyoruz.

// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("Hello");
// });

// npm i node fetch diyerek fetch kütüphanesini kurduk.

// import fetch from "node-fetch"

// fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//     data.json().then((users) => {
//         console.log("users yüklendi: " + users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => {
//             data.json().then((post) => {
//                 console.log("post yüklendi: " + post);
//             });
//         });
//     });
// });

// biz fetch ile kullanıcılara ulaştık.
// diyelim ki fetch içerisinde fetch oluşturduk.
// ilk olarak kullanıcıların yüklenmesini ardından postların yüklenmesini istediğimiz için
// fetchleri iç içe kullanmak doğru bir çözüm değildir.

// Çözüm olarak => async-await

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users").then()
//     ).json()
   
//     const post = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1").then()
//     ).json()

//     console.log(users);
//     console.log(post);
// };


// Biz kolaylık olması reactta da kullanacağımız kütüphane olan "axios" e göz aşınalığımız olması açıısndan axios i kuralım.
// bize sağladığı kolaylık json() dememize gerek kalmadan gelen verileri json a dönüştürüyor.

// axios ı indirmek için  "npm i axios" yazıp 

// import axios from "axios" //yazmamız yeterlidir.

// async function getData() {
//     const users = await (
//         await axios("https://jsonplaceholder.typicode.com/users").then())

   
//     const post = await (
//         await axios("https://jsonplaceholder.typicode.com/posts/1").then())


//     console.log(users);
//     console.log(post);
// };

// getData();


// resolve => Bu işlem başarıyla gerçekleşti ve datayı kullanabilirsin
// reject => Bu kod çalışırken bir hata oluştu. kodu reddeldi. reject edildi.

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         resolve("çalışıyor.");
//     });
// };

// getComments()
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// getComments fonksiyonumda yeni bir promise çalıştırıyorum ve işlem başarılı ise konsolda çalışıyor yazacak değilse hata dönecek.

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number == 1){
//             resolve("İşlem başarılı")
//         }
//         reject("Bir problem oluştu.")
//     });
// };

// getComments(2)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// getComments daki number parametresi 1'e eşit olduğunda resolve dönüp konsol ekranında işlem başarılı yazacak.
// farklı bir değer girildiğinde reject çalışacaktır.

import axios from "axios"
import { isError } from "util";

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")

        resolve(data);
        reject("Bir sorun oluştu.")
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)

        resolve(data);
        reject("Bir sorun oluştu.")
    })
}

// (async () => {
//     const users = await getUsers()
    
//     const post = await getPost(1)

//     console.log(users);
//     console.log(post);
// })();

// hata yakalama işlemini ise try ve catch ile yapabiliriz.

(async () => {
    try{
        const users = await getUsers()
        
        const post = await getPost(1)
    
        console.log(users);
        console.log(post);
    } catch(e) {
        console.log(e);
    }
})();

// Birden fazla promise çalıştırmak için ise;

// Promise.all(getUsers(), getPost(1))
// .then(console.log)
// .catch(console.log);