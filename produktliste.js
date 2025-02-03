const listContainer = document.querySelector(".produktliste");
const categoryliste = new URLSearchParams(window.location.search).get("category");

document.querySelector("h2").innerHTML = `${categoryliste}`;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${categoryliste}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `
      <article class="produkt">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <img class="udsolgtbillede" src="udsolgt.webp" alt="Sold out" />
          <h3>${product.productdisplayname}</h3>
          <p class="pris">
            <span>Previously</span>
            DKK ${product.price},-
          </p>
          <div class="discount">
            <p>Now DKK 600,-</p>
            <p>33%</p>
          </div>
          <a href="produkt.html">Buy now</a>
        </article>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
