const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",          
        },
      });

    return response.json();
}

async function handleClick() {
    const { joke } = await fetchJoke();
    console.log(joke);
    jokeHolder.textContent = joke;    
}

jokeButton.addEventListener("click", handleClick);

let reportAcudits = [];
const d = new Date();
let date = d.toISOString().split('T')[0];
let joke;

class Joke {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
        return {joke, score, date};
    }
}

let score = "0";

let newJoke = new Joke(joke, score, date);

function loadScore(rank) {
    if (rank === 1) {
        score = "1";
        joke = jokeHolder.textContent;
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);        
        console.log(reportAcudits);
    }
    if (rank === 2) {
        score = "2"; 
        joke = jokeHolder.textContent;
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);        
        console.log(reportAcudits);
    }
    if (rank === 3) {
        score = "3";
        joke = jokeHolder.textContent;
        newJoke = new Joke(joke, score, date);
        reportAcudits.push(newJoke);        
        console.log(reportAcudits);
    }
    return score;
}