const DOMSelectors = {
  form: document.querySelector("#form"),
  name: document.querySelector("#name"),
  artist: document.querySelector("#artist"),
  image: document.querySelector("#image"),
  page: document.querySelector(".page"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const album = {
    name: DOMSelectors.name.value,
    artist: DOMSelectors.artist.value,
    image: DOMSelectors.image.value,
  };
  inject(album);
  clear();
  remove();
});

function inject(alb) {
  DOMSelectors.page.insertAdjacentHTML(
    "beforeend",
    `   <div class="box">
<h2 class="type">${alb.name}</h2>
<h4 class="type">${alb.artist}</h4>
<img src="${alb.image}" class="pic" alt="">
<button class="buttonremove">remove</button>
</div>`
  );
}

function remove() {
  document.querySelectorAll(".buttonremove").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    })
  );
}

function clear() {
  DOMSelectors.name.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.image.value = "";
}