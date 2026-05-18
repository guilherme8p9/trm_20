document.addEventListener('mousemove',(e) => { // o navegador ta meio q esperando determinado evento acontecer, q no caso eh o mouse move, ent qnd vc mexe o mouse ele ativa as proximas linhas
const trail = document.createElement('div'); // ele cria uma variavel chamada trail e armazena nela uma instrucao para criar uma div nova
trail.className = 'mouse_trail'; // aqui eu to linkando a classe do css nessa variavel trail, ent td vez q ele cria uma div ele ta criando uma mouse_trail

trail.style.left = e.clientX + 'px'; // ele pega a posicao do mouse e diz que a trail vai ser inserida ali
trail.style.top = e.clientY + 'px'; // msm coisa so q na vertical

document.body.appendChild(trail); // isso aqui insere a div dentro do meu html pra ela aparecer na tela td vez o js cria ela
setTimeout(() => {trail.remove();}, 200); // ele espera 800 milissegundos para poder apagar a div q ele criou, assim o site n trava

});