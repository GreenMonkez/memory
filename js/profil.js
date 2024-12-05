import { updateLocalStorage } from "./modules/storage.js";

const users = JSON.parse(localStorage.getItem("userData")) ?? [];
const userEmail = JSON.parse(sessionStorage.getItem("activeUser")) ?? null;
const user = users.find(user => user.email === userEmail) ?? [];
const userName = user['name'] ?? null;
document.getElementById('name').value = userName;
document.getElementById('email').value = userEmail;
document.getElementById('name').readOnly = true;
document.getElementById('email').readOnly = true;

const memoryArray = [{
    "name": "alphabet",
    "img": "assets/alphabet-scrabble/memory_detail_scrabble.png",
    "nb": "26"
},
{
    "name": "animaux",
    "img": "assets/animaux/memory_detail_animaux.png",
    "nb": "28"
},
{
    "name": "animauxAnimes",
    "img": "assets/animauxAnimes/memory_detail_animaux_animes.png",
    "nb": "8"
},
{
    "name": "animauxDomestiques",
    "img": "assets/animauxdomestiques/memory_detail_animaux_domestiques.png",
    "nb": "10"
},
{
    "name": "chiens",
    "img": "assets/chiens/memory_details_chiens.png",
    "nb": "23"
},
{
    "name": "dinosaures",
    "img": "assets/dinosaures/memory_detail_dinosaures.png",
    "nb": "10"
},
{
    "name": "dinosauresAvecNom",
    "img": "assets/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png",
    "nb": "10"
},
{
    "name": "legume",
    "img": "assets/memory-legume/memory_detail.png",
    "nb": "6"
}];

function changeImg(event) {
    const memoryName = event.currentTarget.value;
    const memory = memoryArray.find(memory => memory.name === memoryName);
    const memorySrc = memory['img'];
    document.getElementById("imgId").src = memorySrc;
}

document.getElementById("choice").addEventListener('change', changeImg)

function handleSubmit(event) {
    event.preventDefault();

    if (!userEmail) {
        alert("Vous n'êtes pas connecté");
        return;
    }

    const index = users.findIndex(user => user.email === userEmail);
    users.splice(index, 1);

    const memoryName = document.getElementById('choice').value;
    Object.assign(user, { "choice": memoryName });

    const memory = memoryArray.find(memory => memory.name === memoryName);
    const memoryNb = parseInt(memory['nb']);

    const memorySize = parseInt(document.getElementById('size').value);
    Object.assign(user, { "size": memorySize });

    if (memorySize > memoryNb) {
        alert('La taille choisie est trop grande pour ce memory');
        return;
    }

    updateLocalStorage(users, user);
    alert('Profil mis à jour');
    location.reload();
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);
