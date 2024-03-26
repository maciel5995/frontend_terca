// navegando pelo DOM
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[3].childNodes);
// console.log(document.body.childNodes[3].childNodes[1].textContent);

// acessando elemento pelo nome da tag
// const tagName = document.getElementsByTagName('h2');
// // console.log(tagName);
// // console.log(tagName[0].textContent);

// // acessando elemento pelo nome do ID
// const nameID = document.getElementById('title');
// console.log(nameID.textContent);

// // acessando elemento pelo nome da classe
// const className = document.getElementsByClassName('posts');
// // console.log(className);
// // console.log(className[0]);

// // acessando via css
// const postsQueryAll = document.querySelectorAll('.posts');
// // console.log(postsQueryAll);

// const postsQuery = document.querySelector('.posts');
// // console.log(postsQuery);

// const container = document.querySelector('#container');
// // console.log(container);

// const p2 = document.createElement('p');
// p2.textContent = 'eu sou o novo parágrafo'
// // console.log(p2);
// // console.log(postsQueryAll[0])
// // postsQueryAll[0].appendChild(p2);

// const myText = document.createTextNode("Inserindo novo título na div container");
// // console.log(myText)
// const h3 = document.createElement("h3");
// h3.appendChild(myText);
// // console.log(h3);
// container.appendChild(h3);

const btn = document.querySelector('#button');
// adição de evento de click
btn.addEventListener('click', function () {
    console.log('clicou!');
    // btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseenter', function () {
    // console.log('Mouse sobre o botão!');
    btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseleave', function () {
    // console.log('Mouse fora do botão!');
    btn.style.backgroundColor = 'blue';
});

const mouse = document.querySelector("#mouse");
    mouse.addEventListener("dblclick", () => {
    // console.log("Clique duplo");
});

mouse.addEventListener("mousedown", () => {
    console.log("Pressionou botão");
});

mouse.addEventListener("mouseup", () => {
    console.log("Soltou botão");
});

document.addEventListener("mousemove", (e) => {
    // console.log(`Eixo X: ${e.x}`);
    // console.log(`Eixo Y: ${e.y}`);
});

// eventos de teclado
document.addEventListener("keydown", (e) => {
    // console.log(e)// propriedade do evento e
    console.log(`Pressionou ${e.key}`);
});

document.addEventListener("keyup", (e) => {
    console.log(`Soltou ${e.key}`);
});

// removendo efeito padrão
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Desabilitou ação do link");
});

const input = document.querySelector("#input");
input.addEventListener("focus", (e) => {
    console.log("Efeito de focus!");
});

input.addEventListener("blur", (e) => {
    console.log("Efeito de blur!");
});