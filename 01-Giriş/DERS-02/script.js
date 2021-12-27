import {hello, text, user, users, topla} from "./my-module.js";

// Biz default olarak yazdığımız çıktılarımızı almak için normal bir şekilde yazabiliriz. -> topla
// Biz tanımladığımız değişkenin başında export dediğimizde süslü parantez içinde çağırmamız lazım. -> {hello}

console.log(topla(3, 4));

console.log(text);
console.log(user);
console.log(users);

hello("zehra");