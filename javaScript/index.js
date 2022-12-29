const introducao = document.querySelector('#introducao')



class MudarTextos {
    constructor(titulo, sub_titulo, url, trailer){
        this.titulo = titulo
        this.sub_titulo = sub_titulo
        this.url = url
        this.trailer = trailer
        this.renderText(this.titulo, this.sub_titulo)
        this.renderImg(this.url)
        this.renderTrailer(this.trailer)
    }

    renderText(titulo, sub_titulo) {
        const title = document.querySelector('h1#title')
        const paragrafo = document.querySelector('p#sub-tilte')

        title.innerText = titulo
        paragrafo.innerText = sub_titulo
        return
    }

    renderImg(url) {
        const bg = document.querySelector('#introducao')
        bg.style.backgroundImage = `url("${url}")`
        bg.style.transition = '.5s'
    }

    renderTrailer(src) {
        document.querySelector('#imgPageVideo').src = src
    }
}


const iconesBtn = document.querySelectorAll('.iconeBtn')

iconesBtn.forEach(Element => {
    Element.addEventListener('click', elementoClicado => {
        const varelementoClicado = elementoClicado.currentTarget

        iconesBtn.forEach(e => e.style.borderColor = '#ffffff')
        varelementoClicado.style.borderColor = '#ffff00'

        switch (varelementoClicado.id) {
            case 'Diablo-4':
                new MudarTextos("Retorne à escuridão com o game Diablo IV", "O retorno de Lilith traz uma era de escuridão e sofrimento", "./imagens/banner-hero/games/diablo-bg.png", "./imagens/banner-hero/games/diablo-animation-cover.png")
                break

            case 'Hearthstone':
                new MudarTextos("Novo pacote de expansão de Hearthstone", "A Horda e a Aliança se encontraram no Vale Alterac para lutar", "./imagens/banner-hero/games/hearthstone-bg.png", "./imagens/banner-hero/games/hearthstone-animation-cover.png")
                break

            case 'Shadowlands':
                new MudarTextos("Desbrave as Terras Sombrias em Shadowlands!" , "O que jaz além do mundo que você conhece?", "./imagens/banner-hero/games/wow-bg.png", "./imagens/banner-hero/games/wow-animation-cover.png")
                break

            case 'Diablo-imortal':
                new MudarTextos("Um capitulo inédito na saga de diablo", "Enfrente males ancestrais e descubra o que aconteceu ..", "./imagens/banner-hero/games/diablo-immortal-bg.png", "./imagens/banner-hero/games/diablo-immortal-animation-cover.png")
                break

            case 'StarCraft':
                new MudarTextos("O supremo jogo de estratégia em tempo real", "Jogue do seu jeito", "./imagens/banner-hero/games/starcraft-2-bg.png", "./imagens/banner-hero/games/starcraft-2-animation-cover.png")
                break
        }
    })
})