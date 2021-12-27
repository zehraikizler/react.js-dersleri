// Temel Node.Js dersi
console.log("Hello Node! Npm start denendi.");

// npm init diyerek package.json dosyasının kurulumunu yapıyoruz.
// Böylelikle node.js'i projeye dahil ediyoruz.

/* package.json içerisindeki script kısmının içerisine 
   "start": "node script.js" yazarsak her seferinde terminalde node script.js yazmak yerine 
   npm start yazmamız yeterli olacaktır. */

// slugify indirildi.

/* let slugify = require('slugify'); => önceden bu kullanım yer almaktadır ancak (require = gerekmek)
   package.json dosyasına type'ı module olarak belirtip
   EcmaScript6 ile kullanımı aşağıdaki gibi olmuştur. */

import slugify from "slugify";

const title = slugify('some string'); // slugify default olarak aralarına kısa çizgi koyar.
const title2 = slugify('some string', '_'); // burada aralarına alt çizgi koymamız gerektiğini belirtiyoruz. 

console.log(title);
console.log(title2);


/*
    Virtual Dom Real Dom
    Real Dom -> gerçek dcument object model
    Virtual Dom -> sanal document object model
    bunlar javascript objesi tarafından tutuluyor react tarafında 
    projemize dahil ettiğimizde sayfada güncelleme olduğu anda React virtual dom ile real domu karşılaştırıyor.
    Eğer farklı olan bir şey varsa getirip real doma yazıyor. 
    Amaç: Gereksiz renderın önüne geçmek
*/