function next(current, upcoming) {

  document.getElementById(current).hidden = true;

  document.getElementById(upcoming).hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
