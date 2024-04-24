import { produtos } from "./store.js";

const renderStore = () => {
  const insertAt = document.querySelector("#produtos");
  produtos.lembrancas.forEach((p, index) => {
    const article = document.createElement("template");

    const produto = `
      <article class="produto">
        <figure>
            <img src="${p.imagem}" alt="${p.nome}" width="250" height="250" />
        </figure>
        <section>
            <p class="nome">${p.nome.toLocaleUpperCase()}</p>
            <p class="descricao">${p.descricao}</p>
            <p class="valor">R$ <span>${p.valor.toFixed(2)}</span></p>
        </section>          
      </article>
    `;

    article.innerHTML = produto;
    insertAt.append(article.content.children[0]);
  });
};

export const renderPage = () => {
  renderStore();
};
