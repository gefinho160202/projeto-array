const listItens = document.querySelector('ul')
const buttonMostrarItens = document.querySelector('.mostrar-itens')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

const btnMenu = document.getElementById('btn-menu')
const mobileMenu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function showAll(productsArray) {
    let = myList = ''

    productsArray.forEach(product => {
        myList +=
            `
        <li>
            <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-place">R$ ${formatCurrency(product.price)}</p>
        </li>
    
    `

    })
    listItens.innerHTML = myList
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dá 10% de desconto

    }))
    showAll(newPrices)

}

function sumALLItens() {
    const totalValue = menuOptions.reduce((acc, currency) => acc + currency.price, 0)

    listItens.innerHTML = `
            
        <li>
          <p> O valor total dos itens é R$: ${formatCurrency(totalValue)}</p>
        </li>
        
        `

}

function filterAllItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)


    showAll(filterJustVegan)
}


buttonMostrarItens.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumALLItens)
filterAll.addEventListener('click', filterAllItens)

