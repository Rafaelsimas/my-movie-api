let nome;
function login(){
  const inputLogin = document.querySelector('#inputLogin').value
  const primeiraPagina = document.querySelector('.primeira-pagina')
  const segundaPagina = document.querySelector('.segunda-pagina')
  const usuarioLogado = document.querySelector('.usuarioLogado')
  primeiraPagina.classList.add('escondido')
  segundaPagina.classList.remove('escondido')
  usuarioLogado.innerHTML = inputLogin
  nome = usuarioLogado
  getContent();
}


async function getContent() {
  try {
    const response = await fetch(
      "https://new-movie-api-rafa-simas.herokuapp.com/filmes"
    );
    const data = await response.json();
    renderizarFilmes(data);
    console.log(data);
  } catch (error) {
    deuRuim();
  }
}

function renderizarFilmes(dados) {
  let filmes = dados;
  const ulFilmes = document.querySelector(".lista-de-filmes");

  for (let i = 0; i < filmes.length; i++) {
    let filme = filmes[i];

    ulFilmes.innerHTML += `
    <li>
    <img src="${filme.foto}" alt="">
    <div class="titulo-filme">${filme.nome}</div>
        <div class="box-descricao">
        <div class="descricao">${filme.descricao}</div>
        </div>
        <div class="elenco">${filme.elenco}</div>
        <div></div>
    </li>
    
    `;
  }
}

function deuRuim() {
  console.log("Erro desconhecido");
}
