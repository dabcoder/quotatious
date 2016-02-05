var quotes = [
  {
    "movie": "Gone with the Wind",
    "quote": "Frankly, my dear, I don't give a damn"
  },
  {
    "movie": "The Godfather",
    "quote": "I'm going to make him an offer he can't refuse"
  },
  {
    "movie": "Star Wars",
    "quote": "May the Force be with you"
  },
  {
    "movie": "Taxi Driver",
    "quote": "You talkin' to me?"
  },
  {
    "movie": "The Wizard of Oz",
    "quote": "There's no place like home"
  },
  {
    "movie": "Forrest Gump",
    "quote": "Mama always said life was like a box of chocolates. You never know what you're gonna get"
  },
  {
    "movie": "Apollo 13",
    "quote": "Houston, we have a problem"
  },
  {
    "movie": "Jerry Maguire",
    "quote": "You had me at 'hello'"
  },
  {
    "movie": "Terminator 2: Judgment Day",
    "quote": "Hasta la vista, baby"
  },
  {
    "movie": "Top Gun",
    "quote": "I feel the need—the need for speed!"
  },
  {
    "movie": "Dirty Dancing",
    "quote": "Nobody puts Baby in a corner"
  },
  {
    "movie": "Titanic",
    "quote": "I'm the king of the world!"
  },
  {
    "movie": "Dracula",
    "quote": "Listen to them. Children of the night. What music they make"
  },
  {
    "movie": "The Adventures of Sherlock Holmes",
    "quote": "Elementary, my dear Watson"
  },
  {
    "movie": "Scarface",
    "quote": "Say 'hello' to my little friend!"
  },
  {
    "movie": "The Godfather Part II",
    "quote": "Keep your friends close, but your enemies closer"
  }
];

var sizeQuotes = quotes.length;
var uniqueRandoms = [];

if (!uniqueRandoms.length) {
  for (var i = 0; i < sizeQuotes; i++) {
    uniqueRandoms.push(i);
  }
}

function generateQuote() {
  function makeUniqueRandom() {
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var qLeft = uniqueRandoms.splice(index, 1);
    console.log(qLeft[0]);

    if (qLeft[0] != null) {
      document.getElementById("quote").innerHTML = '"' + quotes[qLeft].quote + '"';
      document.getElementById("movie").innerHTML = quotes[qLeft].movie;
    } else {
      document.getElementById("quote").innerHTML = 'No more quotes to display';
      document.getElementById("movie").innerHTML = '... but you can reload the page';
    }
  }
  makeUniqueRandom();
}

window.onload = generateQuote();

