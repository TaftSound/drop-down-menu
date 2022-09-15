import './style.css'
import menu from './menu.mjs'

const header = document.createElement('div')
header.classList.add('header')

const content = document.createElement('div')
content.classList.add('content')

document.body.appendChild(header)
document.body.appendChild(content)

const newMenu = menu.createMenu()
newMenu.addTab('Home')
newMenu.addTab('About')
const clientsCategory = newMenu.addCategory('Clients')
const servicesCategory = newMenu.addCategory('Services')
newMenu.addTab('Contact')
clientsCategory.addMenuItem('San Diego Zoo')
clientsCategory.addMenuItem('PBS TV')
clientsCategory.addMenuItem('Microsoft')
servicesCategory.addMenuItem('Original Compositions')
servicesCategory.addMenuItem('Music Production')

header.appendChild(newMenu.getDomElement())

// const home = menuOne.createCategory('Home')
// const about = menuOne.createCategory('About')

// header.appendChild(menu.getMenuElement())
