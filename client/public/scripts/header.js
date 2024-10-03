const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/wukong.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Black Myth: Wukong Villains'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const searchForm = document.createElement('form')
searchForm.id = 'search-form'

const searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.id = 'search-input'
searchInput.placeholder = 'Search for a villain by name...'
searchForm.appendChild(searchInput)

headerRight.appendChild(searchForm)

const headerButton = document.createElement('a')
headerButton.textContent = 'All Villains'  
headerButton.setAttribute('role', 'button')
headerButton.href = '/'
headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)