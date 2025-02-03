const listContainer = document.querySelector(".produktliste");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = (data.map((product) => {
    `
    <article class="produkt">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
      <img class="udsolgtbillede" src="udsolgt.webp" alt="${product.soldout}" />
      <h3>${product.productdisplayname}</h3>
      <p class="pris">
        <span>Previously</span>
        DKK ${product.price},-
      </p>
      <div class="discount">
        <p>Now DKK 895  ,-</p>
        <p>${product.discount}</p>
      </div>
      <a href="produkt.html">Buy now</a>
    </article>`;
  }).join = "");
  console.log(markup);
  listContainer.innerHTML = markup;
}

const navn = new URLSearchParams(window.location.search).get("category");
