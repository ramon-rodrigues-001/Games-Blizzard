const introducao = document.querySelector('#introducao')



class MudarTextos {
    constructor(titulo, sub_titulo, url, trailer_img, trailer_gif){
        this.titulo = titulo
        this.sub_titulo = sub_titulo
        this.url = url
        this.trailer_img = trailer_img
        this.trailer_gif = trailer_gif

        // this.renderText(this.titulo, this.sub_titulo)
        // this.renderImg(this.url)
        // this.renderTrailer_img(this.trailer_img)
        // this.renderTrailer_gif(this.trailer_img, this.trailer_gif)

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
        return
    }

    renderTrailer_img(src) {
        document.querySelector('#imgPageVideo').src = src
        document.querySelector("#play").src = "imagens/banner-hero/icones/play-sim.svg"
        return
    }

    renderTrailer_gif(src_gif) {
        document.querySelector('#imgPageVideo').src = src_gif
        document.querySelector("#play").src = "imagens/banner-hero/icones/play-true.svg"
        return
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
                const mudar = new MudarTextos("Retorne à escuridão com o game Diablo IV", "O retorno de Lilith traz uma era de escuridão e sofrimento", "./imagens/banner-hero/games/diablo-bg.png", "./imagens/banner-hero/games/diablo-animation-cover.png")
                mudar.renderText(mudar.titulo, mudar.sub_titulo)
                mudar.renderImg(mudar.url)
                mudar.renderTrailer_img(mudar.trailer_img)
                break

            case 'Hearthstone':
                const mudar2 = new MudarTextos("Novo pacote de expansão de Hearthstone", "A Horda e a Aliança se encontraram no Vale Alterac para lutar", "./imagens/banner-hero/games/hearthstone-bg.png", "./imagens/banner-hero/games/hearthstone-animation-cover.png")
                mudar2.renderText(mudar2.titulo, mudar2.sub_titulo)
                mudar2.renderImg(mudar2.url)
                mudar2.renderTrailer_img(mudar2.trailer_img)
                break

            case 'Shadowlands':
                const mudar3 = new MudarTextos("Desbrave as Terras Sombrias em Shadowlands!" , "O que jaz além do mundo que você conhece?", "./imagens/banner-hero/games/wow-bg.png", "./imagens/banner-hero/games/wow-animation-cover.png")
                mudar3.renderText(mudar3.titulo, mudar3.sub_titulo)
                mudar3.renderImg(mudar3.url)
                mudar3.renderTrailer_img(mudar3.trailer_img)
                break

            case 'Diablo-imortal':
                const mudar4 = new MudarTextos("Um capitulo inédito na saga de diablo", "Enfrente males ancestrais e descubra o que aconteceu ..", "./imagens/banner-hero/games/diablo-immortal-bg.png", "./imagens/banner-hero/games/diablo-immortal-animation-cover.png")
                mudar4.renderText(mudar4.titulo, mudar4.sub_titulo)
                mudar4.renderImg(mudar4.url)
                mudar4.renderTrailer_img(mudar4.trailer_img)
                break

            case 'StarCraft':
                const mudar5 = new MudarTextos("O supremo jogo de estratégia em tempo real", "Jogue do seu jeito", "./imagens/banner-hero/games/starcraft-2-bg.png", "./imagens/banner-hero/games/starcraft-2-animation-cover.png")
                mudar5.renderText(mudar5.titulo, mudar5.sub_titulo)
                mudar5.renderImg(mudar5.url)
                mudar5.renderTrailer_img(mudar5.trailer_img)
                break
        }
    })
})

const trailer = document.querySelector('#imgPageVideo')

trailer.addEventListener('mouseenter', (ev)=>{
    const elementoAcionado = ev.currentTarget

    switch (elementoAcionado.src) {
        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/diablo-animation-cover.png":
            const mudar_trailer = new MudarTextos(null, null, null, null, "./imagens/banner-hero/games/diablo-animation.gif")
            mudar_trailer.renderTrailer_gif(mudar_trailer.trailer_gif)
            break

        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/hearthstone-animation-cover.png":
            const mudar_trailer2 = new MudarTextos(null, null, null, null, "./imagens/banner-hero/games/hearthstone-animation.gif")
            mudar_trailer2.renderTrailer_gif(mudar_trailer2.trailer_gif)
            break
        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/wow-animation-cover.png":
            const mudar_trailer3 = new MudarTextos(null, null, null, null, "./imagens/banner-hero/games/wow-animation.gif")
            mudar_trailer3.renderTrailer_gif(mudar_trailer3.trailer_gif)
            break
        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/diablo-immortal-animation-cover.png":
            const mudar_trailer4 = new MudarTextos(null, null, null, null, "./imagens/banner-hero/games/diablo-immortal-animation.gif")
            mudar_trailer4.renderTrailer_gif(mudar_trailer4.trailer_gif)
            break
        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/starcraft-2-animation-cover.png":
            const mudar_trailer5 = new MudarTextos(null, null, null, null, "./imagens/banner-hero/games/starcraft-2-animation.gif")
            mudar_trailer5.renderTrailer_gif(mudar_trailer5.trailer_gif)
            break
    }
})


trailer.addEventListener('click', (ev)=>{
    const elementoAcionado = ev.currentTarget

    switch (elementoAcionado.src) {
        case "https://ramon-rodrigues-001.github.io/Games-Blizzard/imagens/banner-hero/games/diablo-animation.gif":
            const mudar_trailer = new MudarTextos(null, null, null, "./imagens/banner-hero/games/diablo-animation-cover.png", null)

            mudar_trailer.renderTrailer_img(mudar_trailer.trailer_img)
            break
        case "file:///C:/Users/55339/Documents/Programa%C3%A7%C3%A3o/One-Bit-Code/Projetos/Games-Blizzard/imagens/banner-hero/games/hearthstone-animation.gif":
            const mudar_trailer2 = new MudarTextos(null, null, null, "./imagens/banner-hero/games/hearthstone-animation-cover.png", null)

            mudar_trailer2.renderTrailer_img(mudar_trailer2.trailer_img)
            break
        case "file:///C:/Users/55339/Documents/Programa%C3%A7%C3%A3o/One-Bit-Code/Projetos/Games-Blizzard/imagens/banner-hero/games/wow-animation.gif":
            const mudar_trailer3 = new MudarTextos(null, null, null, "./imagens/banner-hero/games/wow-animation-cover.png", null)

            mudar_trailer3.renderTrailer_img(mudar_trailer3.trailer_img)
            break 
        case "file:///C:/Users/55339/Documents/Programa%C3%A7%C3%A3o/One-Bit-Code/Projetos/Games-Blizzard/imagens/banner-hero/games/diablo-immortal-animation.gif":
            const mudar_trailer4 = new MudarTextos(null, null, null, "./imagens/banner-hero/games/diablo-immortal-animation-cover.png", null)

            mudar_trailer4.renderTrailer_img(mudar_trailer4.trailer_img)
            break 
        case "file:///C:/Users/55339/Documents/Programa%C3%A7%C3%A3o/One-Bit-Code/Projetos/Games-Blizzard/imagens/banner-hero/games/starcraft-2-animation.gif":
            const mudar_trailer5 = new MudarTextos(null, null, null, "./imagens/banner-hero/games/starcraft-2-animation-cover.png", null)

            mudar_trailer5.renderTrailer_img(mudar_trailer5.trailer_img)
            break
    }
})