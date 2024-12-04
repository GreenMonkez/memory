import { updateLocalStorage } from "./modules/storage.js";

const users = JSON.parse(localStorage.getItem("userData")) ?? [];
const userEmail = JSON.parse(sessionStorage.getItem("activeUser")) ?? [];
const user = users.find(user => user.email === userEmail) ?? [];
const userName = user['name'] ?? [];
document.getElementById('name').value = userName;
document.getElementById('email').value = userEmail;
document.getElementById('name').readOnly = true;
document.getElementById('email').readOnly = true;

let memoryArray = [{
    "name": "alphabet",
    "img": "assets/alphabet-scrabble/memory_detail_scrabble.png"
},
{
    "name": "animaux",
    "img": "assets/animaux/memory_detail_animaux.png"
},
{
    "name": "animauxAnimes",
    "img": "assets/animauxAnimes/memory_detail_animaux_animes.png"
},
{
    "name": "animauxDomestiques",
    "img": "assets/animauxdomestiques/memory_detail_animaux_domestiques.png"
},
{
    "name": "chiens",
    "img": "assets/chiens/memory_details_chiens.png"
},
{
    "name": "dinosaures",
    "img": "assets/dinosaures/memory_detail_dinosaures.png"
},
{
    "name": "dinosauresAvecNom",
    "img": "assets/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png"
},
{
    "name": "legume",
    "img": "assets/memory-legume/memory_detail.png"
}];

function changeImg(event) {
    let memoryName = event.currentTarget.value;
    const memory = memoryArray.find(memory => memory.name === memoryName);
    const memorySrc = memory['img'];
    document.getElementById("imgId").src = memorySrc;
}

document.getElementById("choice").addEventListener('change', changeImg)

function handleSubmit(event) {
    event.preventDefault();

    if (!user) {
        alert("Vous n'êtes pas connecté");
        return;
    }

    let index = users.findIndex(user => user.email === userEmail);
    users.splice(index, 1);
    let memoryName = document.getElementById('choice').value;
    Object.assign(user, { "choice": memoryName });

    updateLocalStorage(users, user);
    alert('Profil mis à jour');
    location.reload();
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);
