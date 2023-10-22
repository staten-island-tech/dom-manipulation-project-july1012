DOMSelectors = {
    form: document.querySelector("#form"),
    color: document.querySelector(".color-name"),
    h2s: document.querySelectorAll("h2"),
};

console.log(DOMSelectors.form);

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.color.value);
//     DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.color.value);
});
