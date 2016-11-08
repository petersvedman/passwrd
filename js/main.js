var ord = [
    "Hemma", "Bord", "Stol", "Soffa", "Balkong","Bil", "Cykel",
    "Katt", "Hus", "Hund", "Kok", "Hall", "Rum", "Lampa", "Stereo",
    "Badrum","Dusch","Toalett", "Personer", "Hand", "Arm", "Finger", "Fot",
    "Har","Man","Kvinna","Son","Dotter","Bror","Syster","Natur","Sno","Sol",
    "Mantel","Regn","Vind","Dag","Natt","Morgon","Gris","Trilskas","Is","Fisk",
    "Skidor","Skolan","Bok","Papper","Dator","Nattjobb","Korridor","Lektion",
    "Klassrum","Mat","Hata","Dricka","Koka","Steka","Kniv","Glas","Sked",
    "Kopp", "Kaffe","Vatten","Soppa","Pasta", "Sallad","Pizza", "Kebab",
    "God","Larvig","Intressant","Kall","Fantastisk","Bra","Stil","Sitta",
    "Ligga","Ta","Lyssna","Skriva","Goja","Haka","Surfa","Sporta","Lita",
    "Blod","Grina","Rid","Gul","Brun","Violett","Vit","Svart","Orange",
    "Vad", "Rosa","Vem","Vilka","Nord", "Hur","Manga","Mycket",
    "Ofta","Vader"
    ]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 
    
function makePassword(ord){
    return ord[getRandomInt(0,ord.length)] + String(getRandomInt(1,999))+ord[getRandomInt(0,ord.length)];
}

var para = document.createElement("p");
var node = document.createTextNode("Lösenord: "+ makePassword(ord));
var element = document.getElementById("big");
for (var i=0;i<40;i++){
    para = document.createElement("p");
    node = document.createTextNode("Lösenord: "+ makePassword(ord));
    para.appendChild(node);
    element.appendChild(para);
}

/*var doAdd = document.querySelector("#addOne");

doAdd.addEventListener("click", function(){
    var para = document.createElement("p");
    var node = document.createTextNode("This is new. "+ makePassword(ord));
    para.appendChild(node);
    var element = document.getElementById("big");
    element.appendChild(para);
});

var logit = document.querySelector("#logit");

logit.addEventListener("click",function(){
    console.log(document.querySelector("#big"));
});

*/