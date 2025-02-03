let listContainer = document.querySelector(".kategoriliste");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (category) =>
        `<a class="${category.category}" href="produktliste.html?category=${category.category}"> ${category.category}</a>
    `
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
