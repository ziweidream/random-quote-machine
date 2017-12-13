var quotes = [
  [
    "The Way Get Started Is To Quit Talking And Begin Doing.", "-Walt Disney"
  ],
  [
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "-Winston Churchill"
  ],
  [
    "Don’t Let Yesterday Take Up Too Much Of Today.", "-Will Rogers"
  ],
  [
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", "- Unknown", "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "– Inspirational Quote By Vince Lombardi"
  ],
  [
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.", "- Steve Jobs"
  ],
  [
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "- Rob Siltanen"
  ],
  [
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.", "- Og Mandino"
  ],
  [
    "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.", "- Mohnish Pabrai"
  ],
  [
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.", "- Johann Wolfgang Von Goethe"
  ],
  [
    "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?", "- Brian Tracy"
  ],
  [
    "We Generate Fears While We Sit. We Overcome Them By Action.", "- Dr. Henry Link"
  ],
  [
    "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.", "- Helen Keller"
  ]
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber][0];
  document.getElementById("authorQuote").innerHTML = quotes[randomNumber][1];
  $("#container").empty();
  twttr.widgets.createShareButton("/", document.getElementById("container"), {text: quotes[randomNumber][0] + quotes[randomNumber][1]
  });
}
