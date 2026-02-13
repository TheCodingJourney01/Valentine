const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents the actual "click" from happening

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
  alert("Nice try, but thats not an option ❤️");
});

function sayYes() {
  alert("Yay, I love you so much. Thank you for being my valentine ❤️😍😘");
}
