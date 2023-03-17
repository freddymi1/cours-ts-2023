"use strict";
/**Exemple de typage en TS */
const a = "Hello";
const b = 3;
const isOk = false;
const d = null;
const arrayList = [];
//Typage par object
const users = { lastname: "Freddy", name: "Michel" };
const users1 = { lastname: "Freddy" };
const users2 = { lastname: "Freddy", name: "Michel" };
const users3 = { lastname: "Freddy", name: "Michel", age: 30 };
console.log(users3);
// OUTPUT USERS3
/**
    {
        "lastname": "Freddy",
        "name": "Michel"
    }
*/
const date = new Date();
// Typage de function fleché Function,  [void]: La fonction ne doit rien retourné
const callBack = (e) => console.log(e);
// OU
const cb = (e) => console.log(e);
// Typage de function Function void: La fonction ne doit rien retourné
function printID(id) {
    console.log(id);
}
/**
 * Declare all the const variables
 */
const incrementBTN = document.querySelector('#increment');
const decrementBTN = document.querySelector('#decrement');
const compteur = document.querySelector("#counter");
const heur = document.querySelector("#heur");
const minute = document.querySelector("#min");
const seconde = document.querySelector("#sec");
const box = document.querySelector("#box");
/**Declare and init variables */
let i = 0;
let h = 0;
let min = 0;
let sec = 0;
setInterval(() => {
    // Increment second of 1
    sec += 1;
    seconde.innerHTML = sec.toString();
    // if second < 10, join 0 before seconde counter
    if (sec < 10) {
        seconde.innerHTML = '0' + sec.toString();
    }
    /**
     * if seconde === 60, reset second to 0, increment minute to 1
     */
    if (sec === 60) {
        sec = 0;
        min += 1;
        minute.innerHTML = min.toString();
        // if minute < 10, join 0 before heure counter
        if (min < 10) {
            minute.innerHTML = '0' + min.toString();
        }
        /**Type narrowing */
        if (box) {
            box.classList.add('box');
        }
    }
    if (min === 2) {
        /**Type narrowing */
        if (box) {
            box.classList.add('circle');
        }
    }
    /**
     * if minute === 60, reset minute to 0, increment heur to 1
     */
    if (min === 60) {
        min = 0;
        h += 1;
        heur.innerHTML = h.toString();
        // if heur < 10, join 0 before heure counter
        if (h < 10) {
            heur.innerHTML = '0' + h.toString();
        }
    }
    if (h === 24) {
        h = 0;
    }
}, 1000);
/**
 * @author Freddy Michel
 * @description Arrow function to increment i when clicking in the button increment
 * @param e
 */
decrementBTN.setAttribute('disabled', '');
decrementBTN.style.backgroundColor = "gray";
const incrementCounter = (e) => {
    e.preventDefault();
    // Increment i
    i++;
    // Convert i to string
    compteur.innerHTML = i.toString();
    if (i > 0) {
        decrementBTN.removeAttribute('disabled');
        decrementBTN.style.backgroundColor = "#07427a";
    }
    if (i >= 10) {
        compteur.style.color = "red";
        document.createElement('div');
    }
};
/**
 * @author Freddy Michel
 * @description Arrow function to decrement i when clicking in the button decrement
 * @param e
 */
const decrementCounter = (e) => {
    e.preventDefault();
    // Decrement i
    i--;
    // Convert i to string
    compteur.innerHTML = i.toString();
    if (i < 1) {
        decrementBTN.setAttribute('disabled', '');
        decrementBTN.style.backgroundColor = "gray";
    }
};
/**
 * Add eventListener action in the button
 */
incrementBTN.addEventListener('click', incrementCounter);
decrementBTN.addEventListener('click', decrementCounter);
