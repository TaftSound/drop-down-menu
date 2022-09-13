import './style.css'
import menu from './menu.mjs'

const header = document.createElement('div')
header.classList.add('header')

const content = document.createElement('div')
content.classList.add('content')

document.body.appendChild(header)
document.body.appendChild(content)

const projects = menu.createCategory('Food Tasks')
projects.addMenuItem('Make Pancakes')
projects.addMenuItem('Get Foods')
projects.addMenuItem('Drink Water')

header.appendChild(projects.getItemElement())
