// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const currentLeft = parseInt(dodger.style.left || '0', 10);
  const newPosition = currentLeft - 10;

  if (newPosition >= 0) {
    dodger.style.left = `${newPosition}px`;
  }
}

function moveDodgerRight() {
  const currentRight = parseInt(dodger.style.left || '0', 10);
  const newPosition = currentRight + 10;

  if (newPosition <= 360) {
    dodger.style.left = `${newPosition}px`;
  }
}
