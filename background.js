
const images = [
    "purple.jpeg",
    "blue.jpeg",
    "green.jpeg",
];

const ChosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${ChosenImage}`;

document.body.appendChild(bgImage);
