function showScreen(number) {

  const screens = document.querySelectorAll(".screen");

  screens.forEach(function(screen) {
    screen.classList.remove("active");
  });

  const selectedScreen =
    document.getElementById("screen" + number);

  selectedScreen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
