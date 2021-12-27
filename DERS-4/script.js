// Array Function

/* 
    push => array'in sonuna yeni eleman ekler
    map => Array'i tek tek dönüyor.
    find => arrayin içerisinde verilen koşullarda arama yapar.
    filter => array içerisinde belirlenen koşullarda filtreleme işlevi görür.
    some => array içerisinde herhangi biri koşulu sağlıyorsa veya varsa true döner.
    every => arrayin tüm elemanları şarta uyarsa true döner.
    includes => array içerisinde geçiyor mu geçmiyor mu diye kontrol eder.
*/


const users = ["Mehmet", "Ahmet", "Murat"];

// push

users.push("Ayşe"); // Ayşe'yi diziye ekledi.
console.log("push: " + users);

// map

users.map((item) => {
    console.log("map: " + item);
});

// find

const result = users.find((item) => item === "Mehmet");
console.log(result);

// filter

const filtered = users.filter((item) => item === "Ahmet" || item === "Ayşe");
console.log("filter: " + filtered);

// some

const some = users.some((item) => item === "Zehra");
console.log("some: " + some);

// every

const every = users.every((item) => item.length > 3 );
console.log("every: " + every);


// includes

const meyveler = ["elma", "armut", "muz"];

const ısIncluded = meyveler.includes("muz"); // meyveler dizisi muz elemanını içeriyor mu -> true dönecek.
console.log(ısIncluded);
