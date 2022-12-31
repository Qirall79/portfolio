// eslint-disable-next-line no-undef
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

window.addEventListener("load", () => {
  const header1 = document.querySelector("#hero h1:first-of-type");
  const header2 = document.querySelector("#hero h1:last-of-type");
  const btn = document.querySelector("#hero a");

  header1.style.left = "0";
  header2.style.right = "0";
  header1.style.opacity = "100";
  header2.style.opacity = "100";
  btn.style.opacity = "100";
});
