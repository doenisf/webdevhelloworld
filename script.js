function gitRedirect() {
    location.href ="https://github.com/doenisf";
}

function instaRedirect() {
    location.href = "https://www.instagram.com/simon.froehner/?hl=de";
}

const clickMeButton = document.querySelector('#click-me');

clickMeButton.addEventListener("click", () => {
    alert("Button Clicked!!!!");
});


const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntriers(new FormData(e.target));
    console.log(values);
})