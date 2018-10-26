let igrac1 = "X";
let igrac2 = "O"

let red = 1;
let brPoteza = 0;

let sqr = document.getElementsByClassName("kvadrat");
let naPotezu = document.getElementById("ptz");

let jedan = document.getElementById("0");
let dva = document.getElementById("1");
let tri = document.getElementById("2");
let cetiri = document.getElementById("3");
let pet = document.getElementById("4");
let sest = document.getElementById("5");
let sedam = document.getElementById("6");
let osam = document.getElementById("7");
let devet = document.getElementById("8");

for(let i = 0; i < sqr.length; i++) {
    sqr[i].addEventListener("click", function() {
        if(event.target.innerText !== "") {
            return;
        }

        brPoteza++;

        if(red === 1) {
            event.target.innerText = igrac1;
            naPotezu.innerText = "Igrac O je na potezu";
            red++;
        } else {
            event.target.innerText = igrac2;
            naPotezu.innerText = "Igrac X je na potezu";
            red--;
        }

        if(jedan.innerText !== "" && jedan.innerText === dva.innerText && jedan.innerText === tri.innerText ||
            cetiri.innerText !== "" && cetiri.innerText === pet.innerText && cetiri.innerText === sest.innerText ||
            sedam.innerText !== "" && sedam.innerText === osam.innerText && sedam.innerText === devet.innerText ||
            jedan.innerText !== "" && jedan.innerText === cetiri.innerText && jedan.innerText === sedam.innerText ||
            dva.innerText !== "" && dva.innerText === pet.innerText && dva.innerText === osam.innerText ||
            tri.innerText !== "" && tri.innerText === sest.innerText && tri.innerText === devet.innerText ||
            jedan.innerText !== "" && jedan.innerText === pet.innerText && jedan.innerText === devet.innerText ||
            tri.innerText !== "" && tri.innerText === pet.innerText && tri.innerText === sedam.innerText) {
                
                let pobjednik = red === 1 ? igrac2 : igrac1;
                alert("Igrac " + pobjednik + " je pobjednik");
        } else if(brPoteza === 9) {
                jedan.innerText = "";
                dva.innerText = "";
                tri.innerText = "";
                cetiri.innerText = "";
                pet.innerText = "";
                sest.innerText = "";
                sedam.innerText = "";
                osam.innerText = "";
                devet.innerText = "";

                red = 1;
                brPoteza = 0;
                naPotezu.innerText = "Igrac X je na potezu";
        }
    });
}

