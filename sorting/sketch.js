var array = [];
var length = 100;
var w;
var pointer;
function setup() {
  createCanvas(700, 500).style("margin", "50px auto");

  for (var i = 0; i < length; i++) {
    array.push(floor(random(5, height) - 1));
  }
  w = floor(width / length);
  pointer1 = 0;
  pointer2 = 0;
}

function draw() {
  background(220);
  frameRate(100);

  if (pointer1 > array.length) {
    console.log("SORTED !!!");
    noLoop();
  }
  fill(220);

  if (array[pointer2] < array[pointer1]) {
    var temp = array[pointer2];
    array[pointer2] = array[pointer1];
    array[pointer1] = temp;
  }

  for (var i = 0; i < array.length; i++) {
    rect(i * w, height - array[i], w, array[i]);
  }
  fill(255, 0, 0);
  rect(pointer1 * w, height - array[pointer1], w, array[pointer1]);
  fill(0, 255, 0);
  rect(pointer2 * w, height - array[pointer2], w, array[pointer2]);
  pointer2++;
  if (pointer2 > array.length) {
    pointer2 = pointer1 + 1;
    pointer1++;
  }
}
