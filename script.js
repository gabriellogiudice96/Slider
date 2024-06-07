


document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper"),
        carousel = document.querySelector(".carousel"),
        images = document.querySelectorAll(".carousel img"),
        buttons = document.querySelectorAll(".button");

    let imageIndex = 0,
        intervalId;


    const autoSlide = () => {
        intervalId = setInterval(() => slideImage(++imageIndex), 2000);
    };

    autoSlide();


    const slideImage = () => {
        if (imageIndex >= images.length) {
            imageIndex = 0;
        } else if (imageIndex < 0) {
            imageIndex = images.length - 1;
        }
        carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
    };


    const updateClick = (e) => {
        clearInterval(intervalId);
        imageIndex += e.target.id === "next" ? 1 : -1;
        slideImage();
        autoSlide();
    };


    buttons.forEach((button) => button.addEventListener("click", updateClick));


    wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
    wrapper.addEventListener("mouseleave", autoSlide);
});
