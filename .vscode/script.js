function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  // html.classList.toggle('light')
  const img = document.querySelector("#caixa-03 img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/IMG_20180331_112755.jpg")
  } else {
    img.setAttribute("src", "./img/16e18d40-5e7d-4ff1-aa32-da05859a4300.jpg")
  }
}
