function tutorial() {
    window.location.href = "https://www.youtube.com/watch?v=psz9hUEIlHc";
};

function dark() {
    const fc = document.getElementById("corpo");
    fc.style.backgroundColor = fc.style.backgroundColor.includes("rgb(27, 25, 25)") ? "rgb(255, 255, 255)" : "rgb(27, 25, 25)";
    const img = document.getElementById("dkm");
    img.src = img.src.includes("https://cdn3.iconfinder.com/data/icons/block/32/moon-512.png") ? "https://png.pngtree.com/png-clipart/20221229/original/pngtree-icon-of-sun-png-image_8823429.png" : "https://cdn3.iconfinder.com/data/icons/block/32/moon-512.png";
    img.style.borderColor = img.style.borderColor.includes("yellow") ? "black": "yellow";
}