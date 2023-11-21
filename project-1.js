//variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `“Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!”`,
    person: `Don Quixote Doflamingo `,
  },
  {
    quote: `“People, who can’t throw something important away, can never hope to change anything.”`,
    person: ` Armin Arlert `,
  },
  {
    quote: `“If you don’t take risks, you can’t create a future”`,
    person: `Monkey D.Luffy`,
  },
  {
    quote: `“Humans die. Animals die. Plants die. Even soul reapers die. It’s the arch of the universe. Everything that comes to life eventually ceases to exist.” `,
    person: `Baraggan`,
  },
  {
    quote: ` "Simplicity is the easiest path to true beauty."`,
    person: `Seishuu Handa, Barakamon `,
  },
  {
    quote: `Fools who don’t respect the past are likely to repeat it."`,
    person: `Nico Robin`,
  },
  {
    quote: `"When it comes to people you really love, you don’t care about yourself."`,
    person: `Kurosawa Yamato`,
  },
  {
    quote: `When a man learns to love, he must bear the risk of hatred.`,
    person: `Madara Uchiha`,
  },
  {
    quote: `In order to survive, we cling to all we know and understand.`,
    person: `Itachi(God)`,
  },
  {
    quote: `Would you say that of our slain comrades? What about their lives? Were they meaningless?... They were not! Their memory serves as an example to us all! The courageous fallen! The anguished fallen! `,
    person: `Erwin smith`,
  },
];
btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomNumber].quote;
  person.innerText = quotes[randomNumber].person;
});
