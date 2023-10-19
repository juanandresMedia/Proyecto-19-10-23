import {Data} from "./Data.js"

console.log(Data)
const item = document.getElementById('item')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

let like = {}
document.addEventListener('DOMContentLoaded',() =>{
    loadData(Data)
})
const loadData = Data=>{Data.forEach(Personaje => {
    const{id,name,img} = Personaje
    templateCard.querySelector('h5').textcontent = name
    templateCard.querySelector('img').setAttribute('scr',img)
    templateCard.querySelector('.btn-dark').dataset.id = id
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
});
item.appendChild(fragment)
}
item.addEventListener('click', e=>{
    addLike(e);
})
const addLike = e =>{

    if (e.target.classList.contains('btn-dark')){
        setlike(e.target.parentElement)
    }
}
const setlike = objeto =>{
    const boton ={
        id:objeto.querySelector('.btn-dark').dataset.id,
        cantidad:0
    }
    if(like.hasOwnProperty(boton.id)){
        boton.cantidad=like[boton.id].cantidad+1
        objeto.querySelector('#like').textcontent=boton.cantidad
    };
    like[boton.id]={...boton}
    console.log(like[boton.id]);
}