function dark() {
    var corpo = document.getElementById("bodyy");
    var e = document.querySelectorAll('p , input, select, option');
    corpo.style.backgroundColor = corpo.style.backgroundColor.includes("rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
   
    e.forEach((el) =>{
    el.style.color = el.style.color.includes("rgb(255, 255, 255)") ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
    if (el.tagName === 'OPTION') {
        el.style.backgroundColor = el.style.backgroundColor.includes("rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
   }
});
}
