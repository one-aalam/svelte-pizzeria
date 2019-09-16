export const sticky = elm =>  {
    const sticky = elm.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
            elm.classList.add("sticky"); // `sticky` is a TailwindCSS class
        } else {
            elm.classList.remove("sticky");
        }
    });

    return {
        destroy() {
            window.removeEventListener("scroll", scrollCallBack);
        }
    };
}