function area(w, h) {
  return w * h;
}

function circumference(w, h) {
  return 2 * w + 2 * h;
}

function diagonal(w, h) {
  return Math.sqrt(w * w + h * h);
}

module.exports = { area, circumference, diagonal };
