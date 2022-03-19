// selecting elements
/*
const numbers = Array.from(document.querySelectorAll(".numbers span"));
const submit = document.querySelector(".btn");
const info = document.querySelector(".info span");
const parent = document.querySelector(".parent");
const container = document.querySelector(".content");

numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        // number.classList.add("clicked");
        // let text = number.textContent;
        // info.innerHTML = text;
        // submit.addEventListener("click", function() {
        //     container.style.display = "none";
        //     parent.style.display = "block";
        // });
    });
});

parent.addEventListener("click", function() {
    // this.style.display = "none";
    //container.style.display = "block";
    numbers.forEach(number => {
        number.classList.remove("clicked");
    });
});
*/
$(function() {
    const numbers = $(".numbers span");
    const submit = $(".btn");
    const parent = $(".parent");
    const container = $(".content");
    const info = $(".info span");
    numbers.click(function() {
        $(".numbers span").removeClass("clicked");
        $(this).addClass("clicked");
        let text = $(this).text();
        info.html(text);
        submit.on("click", (function() {
            container.css({display: "none"});
            parent.css({display: "block"});
        }));
    parent.click(function() {
        $(this).css({display: "none"});
        container.css({display: "block"});
        $(".numbers span").removeClass("clicked");
    }); 
});
});