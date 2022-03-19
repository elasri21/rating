// selecting elements
const numbers = Array.from(document.querySelectorAll(".numbers span"));
const submit = document.querySelector(".btn");
const info = document.querySelector(".info span");
const parent = document.querySelector(".parent");
const container = document.querySelector(".content");
numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        number.classList.add("clicked");
        let text = number.textContent;
        info.innerHTML = text;
        submit.addEventListener("click", function() {
            container.style.display = "none";
            parent.style.display = "block";
        });
    });
});

parent.addEventListener("click", function() {
    this.style.display = "none";
    container.style.display = "block";
    numbers.forEach(number => {
        number.classList.remove("clicked");
    });
});