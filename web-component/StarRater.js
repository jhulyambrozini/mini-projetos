class StarRater extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        
        const rater = this.createRater()
        this.stars = this.createStar()
        const description = this.createDescription()

        rater.appendChild(description) // adicionando descrição
        this.stars.forEach(star => rater.appendChild(star)) // adicionando stars dentro do elemento div
        
        this.resetRating()
        
        shadow.appendChild(rater) // adicionando elemento div dentro do componente
    }

    createRater() {
        const rater = document.createElement('div')
        rater.classList.add('star-rater')
        return rater
    }

    createDescription() {
        const description = document.createElement('p')
        description.classList.add('desc')
        description.innerHTML = 'Faça sua avaliação:'

        return description
    }
    
    createStar() {

        const createStar = (_, id) => { // passando um array vazio
            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(id) + 1)
            star.innerHTML = '&#9733'

            star.addEventListener('click', this.setRating.bind(this))
            star.addEventListener('mouseover', this.ratingHover.bind(this))

            return star // retornando array com elementos
        }

        return Array.from({length: 5}, createStar) // inserindo as 5 estrelas dinamicamente
    }

    resetRating() {
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.highlightRating()
    }

    setRating(event) {
        this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'))
    }

    ratingHover(event) {
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.highlightRating()
    }

    // adicionando cor à estrela selecionada
    highlightRating() {
        this.stars.forEach( star => {
            star.style.color = this.currentRatingValue >= star.getAttribute('data-value') ? 'yellow' : 'grey'
        } )
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .star-rater {
                padding: 20px;
            }
            .star {
                font-size: 4rem;
                color: #999999;
                cursor: pointer;
            }
            .desc {
                margin: 0;
                font-size: 2.5rem;
            }
        `
        return style
    }
}

// cusromizando tag star-rater
customElements.define('star-rater', StarRater)