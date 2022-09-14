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

const menu = {
  createMenu: function () {
    const menuDomElement = document.createElement('div')
    menuDomElement.classList.add('MENU')
    return {
      addCategory: function (categoryName, listenerFunction) {
        const newCategory = createCategory(menuDomElement, categoryName, true)
        return newCategory
      },
      addTab: function (categoryName, listenerFunction) {
        const newTab = createCategory(menuDomElement, categoryName, false, listenerFunction)
        return newTab
      },
      getDomElement: function () {
        return menuDomElement
      }
    }
  }
}

export default menu
