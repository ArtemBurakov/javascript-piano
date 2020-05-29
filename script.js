let score = 0;
let obstacles = document.getElementsByClassName("obstacle");

function move() {
  for (let i = 0; i < obstacles.length; i++) {
    let ob = obstacles[i];
    ob.style.top = (ob.offsetTop + 10) +'px';

    if (ob.offsetTop == 735) {
      alert('Game Over');
      window.location.reload();
    } else if (ob.offsetTop == 185) {
      print();
    }
  }

  if (obstacles.length == 0) {
    print();
  }
}

function print() {
  let ele = document.createElement("div");
  ele.setAttribute("class","obstacle");
  ele.style.background = 'black';
  ele.style.top = '-5px';
  ele.style.left = randomLeft() + 'px';
  ele.onclick = function() {
    this.remove();
    score++;
    document.getElementById("score").innerHTML = score;
    clearInterval(interval);
    interval = setInterval(move, 25 - (score / 100));
  }
  document.body.appendChild(ele);
}

function randomLeft() {
  let random = Math.floor(Math.random() * 4) * 110 + 5;
  return random;
}

let interval = setInterval(move, 25 - (score / 100));
print();
