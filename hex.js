const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    // setup hex vaule
    let hexColor = '#';
    // set loop that runs six time
    for(let i=0;i<6;i++){
      hexColor += hex[getRN()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRN(){
  return Math.floor(Math.random() * hex.length)
}