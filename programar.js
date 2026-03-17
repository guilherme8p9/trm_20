function dark() {
    var corpo = document.getElementById("bodyy");
    var e = document.querySelectorAll('p , input, select, option, #corpo');
    corpo.style.backgroundColor = corpo.style.backgroundColor.includes("rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
   
    e.forEach((el) =>{
    el.style.color = el.style.color.includes("rgb(255, 255, 255)") ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
    if (el.tagName === 'OPTION') {
        el.style.backgroundColor = el.style.backgroundColor.includes("rgb(0, 0, 0)") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
}})
};

    var todos = document.querySelectorAll('.sync-input')
    todos.forEach(input => {
        input.addEventListener('input', () => {
            const id = input.getAttribute('data-id');
            document.getElementById(`atr_modi_${id}`).value = Math.floor((input.value-10)/2) ;
        })
    })

todos.forEach( input => {
addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g,'');
})
})