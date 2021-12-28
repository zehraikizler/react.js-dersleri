const name = "Zehra";
const surname = "İkizler";
const isLoggedIn = true;

function Components() {
    return (
    <div>
        <h2>
            {isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Lütfen giriş yapınız."}
        </h2>
        <p>{!isLoggedIn && "Bu yazı görünmez. Koşullu render edildi."}</p>
        <p className="firstClass">class ismi oluştururken sadece class yazdığımızda hata veriyor. jsx in temel kurallarından biri className olarak yazmamızı istiyor.</p>
        <label htmlFor="myinput">
        JavaScriptte de özel tanımlı "for" olduğu için label içerisine htmlFor yazmamız gerekmektedir.
            <input id="myinput" />
        </label>
    </div>
    );
}

export default Components;