window.addEventListener("scroll",function(){
    const header = doucument.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
