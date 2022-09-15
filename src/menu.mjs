import './menu-style.css'

const createItem = (itemName, categoryName) => {
  const item = document.createElement('div')
  item.classList.add('ITEM')
  item.setAttribute('id', `${categoryName}-${itemName}`)
  item.textContent = itemName
  return item
}

const createCategory = function (currentMenu, newCategoryName, isCategory, listenerFunction) {
  const category = document.createElement('div')
  const categoryName = document.createElement('p')
  category.classList.add('CATEGORY-CONTAINER')
  categoryName.classList.add('CATEGORY-NAME')
  categoryName.textContent = newCategoryName
  currentMenu.appendChild(category)
  category.appendChild(categoryName)
  if (isCategory) {
    const menuList = document.createElement('div')
    menuList.classList.add('MENU-LIST')
    category.appendChild(menuList)
    return {
      addMenuItem: (itemName, listenerFunction) => {
        const newItem = createItem(itemName, newCategoryName)
        newItem.addEventListener('click', listenerFunction)
        menuList.appendChild(newItem)
      },
      getCategoryElement: () => {
        return category
      }
    }
  } else {
    category.classList.add('TAB')
    category.addEventListener('click', listenerFunction)
    return {
      getTabElement: () => {
        return category
      }
    }
  }
}

const createMenuIcon = () => {
  const iconContainer = document.createElement('div')
  const lineOne = document.createElement('div')
  const lineTwo = document.createElement('div')
  const lineThree = document.createElement('div')
  iconContainer.classList.add('ICON')
  iconContainer.appendChild(lineOne)
  iconContainer.appendChild(lineTwo)
  iconContainer.appendChild(lineThree)
  const toggleElementOpen = (domElement) => {
    if (domElement.classList[1] === 'OPEN') {
      domElement.classList.remove('OPEN')
    } else { domElement.classList.add('OPEN') }
  }
  return {
    toggleOpen: (domElement) => {
      iconContainer.onmousedown = () => {
        toggleElementOpen(domElement)
        toggleElementOpen(iconContainer)
      }
      iconContainer.ontouchstart = () => {
        iconContainer.onmousedown = null
        toggleElementOpen(domElement)
        toggleElementOpen(iconContainer)
      }
    },
    getDomElement: () => {
      return iconContainer
    }
  }
}

const menu = {
  createMenu: function () {
    const menuContainer = document.createElement('div')
    const menuElement = document.createElement('div')
    menuContainer.classList.add('MENU-CONTAINER')
    menuElement.classList.add('MENU')

    const menuIcon = createMenuIcon()
    menuIcon.toggleOpen(menuElement)
    menuContainer.appendChild(menuIcon.getDomElement())
    menuContainer.appendChild(menuElement)

    return {
      addCategory: function (categoryName, listenerFunction) {
        const newCategory = createCategory(menuElement, categoryName, true)
        return newCategory
      },
      addTab: function (categoryName, listenerFunction) {
        const newTab = createCategory(menuElement, categoryName, false, listenerFunction)
        return newTab
      },
      getDomElement: function () {
        return menuContainer
      }
    }
  }
}

export default menu
