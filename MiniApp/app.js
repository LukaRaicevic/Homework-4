var sdrzj = document.getElementById("sadrzaj");
var submit = document.getElementById("submit");
var str = "";
var poruka = document.createElement("p");

submit.addEventListener("click", sbmtEv);

function sbmtEv() {
    event.preventDefault();
    var broj = document.getElementById("broj").value;
    main(broj);
    let dodaj = document.createElement("button");
    dodaj.innerHTML = "+";
    dodaj.className = "dodajBtn";
    dodaj.setAttribute("id", "dodajBtnID");
    dodaj.addEventListener("click", function() {
        main(1);
    });
    sdrzj.appendChild(dodaj);
    sdrzj.insertAdjacentHTML("afterend", "<input type="+"submit"+" value="+"Test"+" id="+"test"+">");
    document.getElementById("forma").style.display = "none";
    let test = document.getElementById("test");
    test.addEventListener("click", function() {
        if(palindrom(str)) {
            poruka.innerHTML = "Unijeta rijec je palindrom";
            document.getElementById("msg").appendChild(poruka);
        } else {
            poruka.innerHTML = "Unijeta rijec nije palindrom";
            document.getElementById("msg").appendChild(poruka);
        }
        poruka.style.display = "inline";
    });
}

function main(br) {
    for(let i = 0; i < br; i++) {
        let noviDiv = document.createElement("div");
        let noviKv = document.createElement("div");
        noviKv.className = "kvadrati";
        let noviB = document.createElement("button");
        noviB.className = "deleteKv";
        noviB.innerText = "x";
        noviDiv.appendChild(noviKv);
        noviDiv.appendChild(noviB);
        if(br > 1) {
            sdrzj.appendChild(noviDiv);
        } else {
            sdrzj.insertBefore(noviDiv, document.getElementById("dodajBtnID"));
        }
        noviB.addEventListener("click", function() {
            noviB.parentElement.remove();
            str = str.replace(str.charAt(i), "");
        });
        let inp = document.createElement("input");
        inp.type = "text";
        inp.maxLength = 1;
        noviKv.appendChild(inp);
        inp.addEventListener("input", function() {
            var charC = inp.value.charCodeAt(0);
            if((charC > 64 && charC < 91) || (charC > 96 && charC < 123) || charC == 32) {
                noviKv.innerHTML = String.fromCharCode(charC);
                str += String.fromCharCode(charC);
                inp.style.display = "none";
                poruka.style.display = "none";
            } else {
                poruka.innerHTML = "Unos nije validan. Validan unos: A-Z, a-z ili space";
                document.getElementById("msg").appendChild(poruka);
                poruka.style.display = "inline";
            }
        });
        noviKv.addEventListener("click", function() {
            if(event.target == this) {
                console.log("sfsadf"); // Stampa se
                inp.style.display = "block"; // Ova linija ne radi iz nekog meni nepoznatog razloga
                // Definitivno mi nesto promice...
                this.innerHTML = ""; // Brise vrijednost kliknutog kvadratica
            }
        });
    }
}

function palindrom(s)
{
    let bezSp = s.replace(new RegExp(" ", 'g'), "");
    let okreni = bezSp.split('').reverse().join().replace(new RegExp(",", 'g'), "");

    return bezSp === okreni;
}
