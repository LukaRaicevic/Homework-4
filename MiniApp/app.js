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
    document.getElementById("forma").style.display = "none";
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
        });
        noviKv.addEventListener("click", function() {
            event.stopPropagation();
            let inp = document.createElement("input");
            inp.type = "text";
            inp.maxLength = 1;
            noviKv.appendChild(inp);
            inp.addEventListener("input", function() {
                let charC = inp.value.charCodeAt(0);
                console.log(charC);
                if((charC > 64 && charC < 91) || (charC > 96 && charC < 123) || charC == 32) {
                    noviKv.innerHTML = String.fromCharCode(charC);
                    str += String.fromCharCode(charC);
                    inp.style.display = "none";
                } else {
                    poruka.innerHTML = "Unos nije validan. Validan unos: A-Z, a-z ili space";
                    document.getElementById("msg").appendChild(poruka);
                }
            });
            if(palindrom(str)) {
                poruka.innerHTML = "Unijeta rijec je palindrom";
                document.getElementById("msg").appendChild(poruka);
            } else {
                poruka.innerHTML = "Unijeta rijec nije palindrom";
                document.getElementById("msg").appendChild(poruka);
            }
        }, {once:true});
        
    }
}

function palindrom(s)
{
    let bezSp = s.replace(" ", "");
    let okreni = bezSp.split('').reverse().join();

    return bezSp === okreni;
}