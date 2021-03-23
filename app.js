const slidePage = document.querySelector(".slidePage");
const nextBtnFirst = document.querySelector(".next_first");
const nextBtnSecond = document.querySelector(".next_second");
const nextBtnThird = document.querySelector(".next_third");
const backBtnFirst = document.querySelector(".back_first");
const backBtnSecond = document.querySelector(".back_second");
const backBtnThird = document.querySelector(".back_third");

nextBtnFirst.addEventListener("click", () => {
    slidePage.style.marginLeft = ("-25%")
});

nextBtnSecond.addEventListener("click", () => {
    slidePage.style.marginLeft = ("-50%")
});

nextBtnThird.addEventListener("click", () => {
    slidePage.style.marginLeft = ("-75%")
});

backBtnFirst.addEventListener("click", () => {
    slidePage.style.marginLeft = ("0%")
});

backBtnSecond.addEventListener("click", () => {
    slidePage.style.marginLeft = ("-25%")
});

backBtnThird.addEventListener("click", () => {
    slidePage.style.marginLeft = ("-50%")
});