let borgname = document.getElementById('borg-name');
let borgs = [
    "Ron Borgundy",
    "Borganomics",
    "Pablo Escoborg",
    "Playborg Carti",
    "Brown vs. Borg of Education",
    "Borgilicious",
    "Borghilda",
    "Borger King",
    "Smorgasborg",
    "Ruth Bader-Ginsborg",
    "Borgeioise",
    "Borgan Freeman",
    "Curious Borg",
    "Borg Washington",
    "The Aborgtion Clinic",
    "SpongeBorg",
    "Borgzilla",
    "Borgan Bogdonovich",
    "LeBorg James",
    "Borgonometry",
    "Gettysborg Address",
    "Souljia Borg",
    "Borgingham Palace",
    "CyBorg",
    "BorgerLand",
    "Borganic",
    "Hamborger",
    "Borger Patrol",
    "Heisenborg",
    "Marborglo",
    "Borgasm",
    "Pearl Harborg",
    "Shish keborg",
    "Borgage-backed securities",
    "“The Borg not Taken” - Roborg Frost",
    "Rick and Borgy",
    "All Aborg!",
    "Waterborging",
    "Borgbecue Sauce",
    "Borga the Explorer",
    "Borg F150",
    "Sweet Borgby Rays",
    "Arnold Borginator",
    "Borg and Boujie",
    "Borg in the USA",
    "Armed Borglary",
    "Borg to be Wild",
    "Borgasaurs",
    "Osama Borg Laden",
    "Borgupine",
    "Brown Paper Borg",
    "Kareem Abdul-Jaborg",
    "Borg Hub",
    "Borg Bros",
    "Borgin Trail",
    "fuck it we borg",
    "Captain Borgan",
    "Borgan Donor",
    "Amborg Heard",
    "Mark Zuckerborg",
    "The Borg of Rights",
    "Legalize Aborgtion",
    "Borgatory",
    "Holy shit its Jason Borg",
    "Armed borglary",
    "Borgaler",
    "4 Borgs More Whores",
    "Borganic Chemistry"
];
let mio = [
"Lemonade",
"Fruit Punch",
"Strawberry Watermelon",
"Berry Grape",
"Black Cherry",
"Green Thunder",
"Lemon Lime"
];
function generateBorg() {
    var borg = borgs[Math.floor(Math.random()*borgs.length)];
    borgname.innerHTML = borg;
}

function mioOn() {
    var mios = mio[Math.floor(Math.random() * mio.length )];
    document.getElementById("mio-name").innerHTML = mios;
}


window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function dropDown() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.borg,.recipe,.mio',{delay:200, origin:'bottom'});
