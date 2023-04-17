//VARIABLES

const btn = document.querySelector('#new-quote-btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [

    {
        quote: `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."`,
        person: "Abraham Lincoln"
    },

    {   
        quote: `"Hardship often prepares an ordinary person for an extraordinary destiny."`,
        person: "Christopher Markus" },

    {
        quote: `"There is no easy way from the earth to the stars."`,
        person: "Seneca"
    },

    {   quote: `"Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies."`,
        person: "Antoine de Saint-Exupéry"
        },

    {    quote: `"Every man is a creature of the age in which he lives and few are able to raise themselves above the ideas of the time."`,
        person: 'Voltaire'
    },

    {   quote: `"You have power over your mind – not outside events. Realize this, and you will find strength."`,
        person: "Marcus Aurelius" },

    {   quote: `"Life is never made unbearable by circumstances, but only by lack of meaning and purpose."`,
        person: 'Victor Frankl' },

    {    quote: `"The highest activity a human being can attain is learning for understanding, because to understand is to be free."`,
        person: "Baruch Spinoza"},

    {   quote: `"I started my life with a single absolute: that the world was mine to shape in the image of my highest values and never to be given up to a lesser standard, no matter how long or hard the struggle."`,
        person: "Ayn Rand"},

    {   quote: `"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science."`,
        person: "Albert Einstein"},

    {   quote: `"Life must be understood backward. But it must be lived forward."`,
        person: "Søren Kierkegaard"},

    {  quote:  `"Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don’t say that you’ve wasted time. I am studying that mystery because I want to be a human being."`,
       person: "Fyodor Dostoevsky"},

    {   quote: `"The flame that burns Twice as bright burns half as long."`,
        person: "Lao Tzu"},

    {   quote: `"Dwell on the beauty of life. Watch the stars, and see yourself running with them."`,
        person: "Marcus Aurelius"},

    {   quote: `"Those who educate children well are more to be honored than they who produce them; for these only gave them life, those the art of living well."`,
        person: "Aristotle"},

    {   quote: `"The price good men pay for indifference to public affairs is to be ruled by evil men."`,
        person: "Plato"},

    {   quote: `"It is easy in the world to live after the world’s opinion; it is easy in solitude to live after our own; but the great man is he who in the midst of the crowd keeps with perfect sweetness the independence of solitude."`,
        person: "Ralph Waldo Emerson"},

    {   quote: `"It is one thing to show a man that he is in error, and another to put him in possession of truth."`,
        person: "John Locke"},

    {   quote: `"The only thing I know is that I know nothing."`,
        person: "Socrates"},

    {   quote: `"Never let your sense of morals prevent you from doing what is right."`,
        person: "Isaac Asimov" }
];

btn.addEventListener('click', event => {

    let random = Math.floor(Math.random() * quotes.length);

    let randomQuote = quotes[random];

    let mainQuote = randomQuote.quote;
    let randomPerson = randomQuote.person;

    quote.textContent = mainQuote;
    person.textContent = randomPerson;
})