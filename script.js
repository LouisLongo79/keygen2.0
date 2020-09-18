let char = "abcdefghijklmonpqrtsuvyxz";
let caps = "ACBDEGFIHKJMLPORQTSUVXWYZ";
let num = "132657687980";
let sym = "*&^%$#@!";


let chars = document.getElementById("chars");
let simp = document.getElementById("sym");
let numbs = document.getElementById("numbs");
let capa = document.getElementById("caps");
let submit = document.getElementById("Shazam!");
let keygen = document.getElementById("keygen");

submit.addEventListener("click", function () {

    let characters = char;
    (simp.checked)? characters += sym: "";
    (numbs.checked)? characters += numbs: "";
    (capa.checked)? characters += caps: "";
    
    keygen.value = password(chars.value, characters);
});

function password(f, characters) {
    var key = "";
    for (let i = 0; i < f; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}