/**Exemple de typage en TS */
const a: string = "Hello";
const b: number = 3;
const isOk: boolean = false;
const d: null = null;
const arrayList: string[] = [];
//Typage par object
const users: { lastname: string, name: string } = { lastname: "Freddy", name: "Michel" };
const users1: { lastname: string, name?: string } = { lastname: "Freddy" };
const users2: { lastname: string, name: string } = { lastname: "Freddy", name: "Michel" };
const users3: { [key: string]: string | number } = { lastname: "Freddy", name: "Michel", age: 30 };

console.log(users3);

// OUTPUT USERS3
/**
    {
        "lastname": "Freddy",
        "name": "Michel"
    }
*/


const date: Date = new Date();

// Typage de function fleché Function,  [void]: La fonction ne doit rien retourné
const callBack: Function = (e: Event): void => console.log(e);
// OU
const cb: (e: Event) => void = (e: Event): void => console.log(e);

// Typage de function Function void: La fonction ne doit rien retourné
function printID(id: number): void {
    console.log(id)
}

/**
 * Declare all the const variables
 */
const incrementBTN = document.querySelector('#increment') as HTMLButtonElement;
const decrementBTN = document.querySelector('#decrement')as HTMLButtonElement;
const compteur = document.querySelector("#counter") as HTMLElement;

const heur = document.querySelector("#heur") as HTMLElement;
const minute = document.querySelector("#min") as HTMLElement;
const seconde = document.querySelector("#sec") as HTMLElement;

const box = document.querySelector("#box") as HTMLElement;

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
        seconde.innerHTML = '0'+sec.toString();
    }

    /**
     * if seconde === 60, reset second to 0, increment minute to 1
     */
    if (sec === 60 ) {

        sec = 0;
        min += 1;
        
        minute.innerHTML = min.toString();
        // if minute < 10, join 0 before heure counter
        if (min < 10) {
            minute.innerHTML = '0'+min.toString();
        }
        /**Type narrowing */
        if (box) {
            box.classList.add('box');
        }
    }

    if (min === 2) {
        /**Type narrowing */
        if (box) {
            box.classList.add('circle')
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

const incrementCounter = (e: Event) => {
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
}

/**
 * @author Freddy Michel
 * @description Arrow function to decrement i when clicking in the button decrement
 * @param e 
 */

const decrementCounter = (e: Event) => {
    e.preventDefault();
    // Decrement i
    i--;
    // Convert i to string
    compteur.innerHTML = i.toString();

    if(i < 1) {
        decrementBTN.setAttribute('disabled', '');
        decrementBTN.style.backgroundColor = "gray"
    }
}
/**
 * Add eventListener action in the button
 */
incrementBTN.addEventListener('click', incrementCounter);
decrementBTN.addEventListener('click', decrementCounter);
