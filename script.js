function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //essa linha substitui as linhas abaixo que estão em comentário

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light')
  //}

  const img = document.querySelector("#profile img") //query selector é uma função, pesquisa pelo seletor, ele está pegando mesma classe que ta no CSS

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem modo light, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
