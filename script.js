function next(current, upcoming) {

  // Current screen hide karo
  document
    .getElementById(current)
    .classList.add("hidden");


  // Next screen show karo
  document
    .getElementById(upcoming)
    .classList.remove("hidden");


  // Page ko top par le jao
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
