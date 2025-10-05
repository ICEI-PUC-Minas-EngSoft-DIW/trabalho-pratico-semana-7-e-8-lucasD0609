const dados = [
  {
    id: 1,
    titulo: "Líder de Ginásio",
    descricao: "Álbum com sonoridade indie experimental.",
    conteudo: "Produzido de forma independente, o álbum mistura pop alternativo e sintetizadores.",
    categoria: "Indie BR",
    autor: "Líder de Ginásio",
    data: "2025-02-10",
    imagem: "img/liderdeginasio.png"
  },
  {
    id: 2,
    titulo: "Estar sozinha não é um sentimento",
    descricao: "Uma viagem introspectiva com tons de dream pop.",
    conteudo: "O grupo Plumas entrega um som delicado e emocional que reflete as dores e delícias da juventude.",
    categoria: "Indie Pop",
    autor: "Plumas de Cera",
    data: "2025-02-22",
    imagem: "img/plumasdecera.png"
  },
  {
    id: 3,
    titulo: "Kebrada Boyz",
    descricao: "Som alternativo com influência urbana e eletrônica.",
    conteudo: "A banda traz letras diretas e batidas marcantes, retratando o cotidiano das periferias.",
    categoria: "Indie Urbano",
    autor: "Kebrada Boyz",
    data: "2025-03-01",
    imagem: "img/linkdozap.png"
  }
];

const container = document.querySelector(".row.g-4");

if (container) {
  dados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
      <article class="card h-100 text-center">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-dark">Saiba mais</a>
        </div>
      </article>
    `;
    container.appendChild(card);
  });
}