const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get(".produktId");

console.log("produktId", productId);

let productDesc = document.querySelector(".produktmain");
fetch(`https://kea-alt-del.dk/t7/api/products?${productId}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        (productDesc.innerHTML = `
            <article class="produkt ${product.discount && "rabat"} ${product.udsolgt && "udsolgt"}">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <img class="udsolgtbillede" src="udsolgt.webp" alt="Sold out" />
          <h3>${product.productdisplayname}</h3>
          <p class="pris">
            <span>Previously</span>
            DKK ${product.price},-
          </p>
          <div class="discount ${data.discount && "isOnSale"}">
          -${data.discount}%</span>
            <p>Now DKK <span>${Math.floor((product.price * product.discount) / 100)},-</p>
            <p>33%</p>
          </div>
          <a href="produkt.html">Buy now</a>
        </article>`)
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
