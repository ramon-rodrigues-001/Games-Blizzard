const introducao = document.querySelector('#introducao')


const titulo = document.querySelector('h1#title')
const paragrafo = document.querySelector('p#sub-tilte')

function diablo4() {
    titulo.innerText = "Retorne à escuridão com o game Diablo IV" 
    paragrafo.innerText = "O retorno de Lilith traz uma era de escuridão e sofrimento"
}
function hearthstone() {
    titulo.innerText = "Novo pacote de expansão de Hearthstone" 
    paragrafo.innerText = "A Horda e a Aliança se encontraram no Vale Alterac para lutar"
}
function shadowlands() {
    titulo.innerText = "Desbrave as Terras Sombrias em Shadowlands!" 
    paragrafo.innerText = "O que jaz além do mundo que você conhece?"
}
function diabloImortal() {
    titulo.innerText = "Um capitulo inédito na saga de diablo" 
    paragrafo.innerText = "Enfrente males ancestrais e descubra o que aconteceu .."
}
function starCraft() {
    titulo.innerText = "O supremo jogo de estratégia em tempo real" 
    paragrafo.innerText = "Jogue do seu jeito"
}

const iconesBtn = document.querySelectorAll('.iconeBtn')
iconesBtn.forEach(Element => {

    Element.addEventListener('click', elementoClicado => {
        const varelementoClicado = elementoClicado.currentTarget
        iconesBtn.forEach(e => e.style.borderColor = '#ffffff')
        varelementoClicado.style.borderColor = 'red'

        switch (varelementoClicado.id) {
            case 'Diablo-4':
                diablo4()
                break
            case 'Hearthstone':
                hearthstone()
                break
            case 'Shadowlands':
                shadowlands()
                break
            case 'Diablo-imortal':
                diabloImortal()
                break
            case 'StarCraft':
                starCraft()
                break
        }

        introducao.style.backgroundImage = "url()"
        console.log(varelementoClicado.id)
    })
})