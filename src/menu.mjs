import './menu-style.css'

const createItem = (itemName, categoryName) => {
  const item = document.createElement('div')
  item.classList.add('ITEM')
  item.setAttribute('id', `${categoryName}-${itemName}`)
  item.textContent = itemName
  return item
}

const menu = document.createElement('div')
menu.classList.add('MENU')

const domMethods = {
  createCategory: (categoryName) => {
    const category = document.createElement('div')
    category.classList.add('CATEGORY')
    category.textContent = categoryName
    menu.appendChild(category)
    return {
      addMenuItem: (itemName) => {
        const newItem = createItem(itemName, categoryName)
        category.appendChild(newItem)
      },
      addItemListener: (itemName, listenerFunction) => {
        const item = document.getElementById(`${categoryName}-${itemName}`)
        item.addEventListener('click', listenerFunction)
      },
      getItemElement: () => {
        return category
      }
    }
  },
  getMenuElement: () => {
    return menu
  }
}

export default domMethods
