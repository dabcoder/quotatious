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
  }
];

function generateQuote() {
  var q = Math.floor((Math.random() * 7));
  console.log(q);
  document.getElementById("quote").innerHTML = '"' + quotes[q].quote + '"';
  document.getElementById("movie").innerHTML = quotes[q].movie;
}

window.onload = generateQuote();