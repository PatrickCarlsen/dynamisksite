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
      <article class="produkt ${product.discount && "rabat"} ${product.soldout && "udsolgt"}">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <img class="udsolgtbillede" src="udsolgt.webp" alt="Sold out" />
          <h3>${product.productdisplayname}</h3>
          <p class="pris">
            <span>Previously</span>
            DKK ${product.price},-
          </p>
          <div class="discount">
            <p>Now DKK ${Math.round(product.price - (product.price / 100) * product.discount)},-</p>
            <p>${product.discount}%</p>
          </div>
          <a href="produkt.html?id=${product.id}">Buy now</a>
        </article>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

// class=`saleLabel ${data.soldout && "soldout"}`
// class=`saleLabel ${!data.soldout && "IsOnSale"}`

// class=`smallProduct${data.discount ? "onSale" : ""}`
