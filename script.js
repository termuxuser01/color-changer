const colors = [
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#00FF00",
]

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    // get random number
    const randomNumber = getRN();
    // set background to random color from array
    document.body.style.backgroundColor = colors[randomNumber];
    // display the color
    color.textContent = colors[randomNumber];
});

function getRN(){
  return Math.floor(Math.random() * colors.length)
}
