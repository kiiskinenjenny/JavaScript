//GOOGLE
let v = "Siirrytäänkö Googleen?"; //muuttujaan v sijoitetaan teksti
let josJoo = v.link("https://www.google.fi"); //uusi muuttuja, jossa muuttuja v sijoitetaan linkki
    
//LISTAA
let lista = [
    "google",
    "jenny",
    "soita",
    "tee popup",
    "vaihda",
    "funktio",
    "uusiks"
]
//tehdään lista komennoista
    
//KUVA
let img = document.createElement("img");
img.src = "IMG-20191208-WA0005(2).jpg"; // luodaan elementti, jossa on kuva
img.id = "imgRemove"; // id tunnistamista varten
let src = document.getElementById("oikea"); // elementillä kohdistetaan, mihin halutaan kuva
    
//GENEROITUA TEKSTIÄ
let generic = "Generoitua tekstiä";
    
//ÄÄNI
let tempAudio = document.createElement("audio"); //tee elementti
tempAudio.src = "add.mp3"; //anna url mistä ääni luetaan
tempAudio.id = "tempAudioRemove"; //tee id tunnistamista varten
    
//TEE POPUP
let modal = document.getElementById("myModal"); //kutsutaan index puolelta id ja class
let span = document.getElementsByClassName("close")[0];
    
//TUNTEMATON KOMENTO
let ilmoitus = "Komentoa ei tunnistettu"; //tunnistamaton komento

//FUNKTIO
let input = document.createElement("input");
let nappi = document.createElement("button"); //luodaan input-kenttä ja nappi
nappi.id = "nappi";
input.id = "inputti"; //luodaan niille id
input.type = "text";
input.placeholder = "Suorita"; //input-kenttä, jossa lukee Suorita
let place = document.getElementById("oikea"); // paikka, johon funtio suoritetaan


document.getElementById("laheta").addEventListener("click", function(){
//kuunnellaan nappia, jonka id on laheta

    let g = document.getElementById("tekstikentta").value;
    //luetaan käyttäjän syötettä, joka on tekstikentässä

    if (g == "google"){
        document.getElementById("oikea").innerHTML = josJoo;
        //hyperlinkki oikealle kolumnille
    }
    else if (g == "listaa"){
        for (let komento in lista) {//käydään jokaista komentoa listalta
            let ele = lista[komento];
            ele.id = "ele";
            document.getElementById("vasen").innerHTML += ele + "<br>"; //vasempaan kolumniin ilmestyy kaikki komennot, joita käyty läpi

            ele.onclick = function() 
            //kun tiettyä komentoa klikkaa
            {
                document.getElementById("tekstikentta").innerHTML = ele;
                //tähän jokainen komento on itsessään klikattava teksti. Kun tekstiä klikataan
                //ilmestyy, kyseinen teksti ylläolevaan tekstikenttään.
            }
        }
    }
    else if (g == "jenny"){
        //tarkastaa onko elementti jo (ettei luoda uutta)
        if (!document.getElementById("imgRemove")){
            src.appendChild(img); // lisää oikealle kolumnille
        }
    }
    else if (g < 999){
        for (let index = 0; index < g; index++) {
        //käydään indexit läpi
            document.getElementById("oikea").innerHTML += [index]+" "+generic+"<br>";
            //jokaisella kierroksella lisätään syötteen verran (kpl) oikeaan kolumniin
        }
    }
    else if (g == "soita"){
        //tarkasta onko elmentti jo (ettei luoda uutta ja uutta)
        if(!document.getElementById("tempAudioRemove")){
        document.body.appendChild(tempAudio); //lisää bodyyn
        }
        tempAudio.play(); //soita
    }
    else if (g == "tee popup"){
        modal.style.display = "block"; //popup ilmestyy
        span.onclick = function() {
            modal.style.display = "none";
        }
        //popup sulkeutuu rastia painamalla
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }
        //popup sulkeutuu painamalla mitä tahansa laatikon ulkopuolelta
    }
    else if (g == "vaihda"){
        document.body.style.backgroundColor = "red";
        //vaihtaa taustavärin punaiseksi
    }
    else if (g == "funktio"){
        console.log("Funktio toimii");
        place.appendChild(input);
        place.appendChild(nappi);
        //ilmestyvät oikealle kolumnille
        document.getElementById("nappi").addEventListener("click", function(){
        //funktio, jossa kuunnellaa napin painallusta
            let i = document.getElementById("inputti").value;
            //luetaan käyttäjän syötettä
            if(i == ""){
                console.log("anna komento");
                //jos tyhjä, konsoliin ilmestyy "anna komento"
            }
            else if (i == "reload"){
                location.reload();
            }
            else{
                console.log("Kirjoiti: "+[i])
                //Jos input-kentässä lukee mitä vain muuta, kirjoittaa ohjelma konsoliin
                //“Kirjoitit: [tähän input-kentän teksti]”
            }
        });
    }
    else if (g == "uusiks"){
        location.reload();
        // sivu latautuu uudelleen
    }
    else if (g == !"google", "listaa", "jenny", "soita", "tee popup", "vaihda", "funktio", "uusiks"){
    // jos komento ei ole mikään yllä olevista, oikealle kolumnille ilmestyy ilmoitus siitä
        document.getElementById("oikea").innerHTML = ilmoitus;
    }
});