import { produtos } from "./store.js";

const renderStore = (arr) => () => {
  const insertAt = document.querySelector("#produtos");
  document.querySelectorAll(".produto")?.forEach(c => c.remove())

  arr.forEach(p => {
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

export const renderLembrancinhas = renderStore(produtos.lembrancas)
export const renderPresentes = renderStore(produtos.presentes)
export const renderDecorativos = renderStore(produtos.decorativos)
export const renderCorporativos = renderStore(produtos.corporativos)
