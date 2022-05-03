function area(w, h) {
  return w * h;
}
function squareArea(w) {
  return w * w;
}

function triangleArea(w, h) {
  return (w * h) / 2;
}

function circleArea(r) {
  return 2 * Math.PI * Math.pow(r, 2);
}

function circumference(w, h) {
  return 2 * w + 2 * h;
}

function diagonal(w, h) {
  return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
}

module.exports = {
  area,
  circumference,
  diagonal,
  squareArea,
  circleArea,
  triangleArea,
};
