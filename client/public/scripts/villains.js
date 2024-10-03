const renderVillains = async() => {
    const response = await fetch('/villains');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    if (data) {
        data.map(villain => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            
            topContainer.style.backgroundImage = `url(${villain.image})`

            const name = document.createElement('h3')
            name.textContent = villain.name
            bottomContainer.appendChild(name)

            const location = document.createElement('p')
            location.textContent = villain.location
            bottomContainer.appendChild(location)

            const type = document.createElement('p')
            type.textContent = villain.type
            bottomContainer.appendChild(type)

            const button = document.createElement('a')
            button.textContent = 'View Details'
            button.setAttribute('role', 'button')
            button.href = `/villains/${villain.id}`
            
            bottomContainer.appendChild(button)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No villains found 😞';
        mainContent.appendChild(message)
    }
}

const renderVillain = async(requestedID) => {
    const response = await fetch(`/villains`);
    const data = await response.json();

    const villainContent = document.getElementById('villain-content');

    let villain

    villain = data.find(villain => villain.id === requestedID)

    if (villain) {
        document.getElementById('image').src = villain.image
        document.getElementById('name').textContent = villain.name
        document.getElementById('location').textContent = villain.location
        document.getElementById('type').textContent = villain.type
        document.getElementById('description').textContent = villain.description
        document.getElementById('rewards').textContent = villain.rewards
        document.title = 'Black Myth: Wukong Villains - ' + villain.name
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No villain found 😞'
        villainContent.appendChild(message)
    }
}

const renderVillainsByName = async (searchName) => {
    const response = await fetch(`/villains`);
    const data = await response.json();

    let villain

    villain = data.find(villain => villain.name === searchName)

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear previous content

    if (villain) {
            const card = document.createElement('div');
            card.classList.add('card');

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');

            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            topContainer.style.backgroundImage = `url(${villain.image})`;

            const name = document.createElement('h3');
            name.textContent = villain.name;
            bottomContainer.appendChild(name);

            const location = document.createElement('p');
            location.textContent = villain.location;
            bottomContainer.appendChild(location);

            const type = document.createElement('p');
            type.textContent = villain.type;
            bottomContainer.appendChild(type);

            const button = document.createElement('a');
            button.textContent = 'View Details';
            button.setAttribute('role', 'button');
            button.href = `/villains/${villain.id}`;

            bottomContainer.appendChild(button);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            mainContent.appendChild(card);
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No villains found 😞';
        mainContent.appendChild(message);
    }
};

const pathComponents = window.location.pathname.split('/').filter(component => component !== '');

if (pathComponents.length === 0) {
    // Path is '/', render the list of villains
    renderVillains();
} else if (pathComponents.length === 1 && pathComponents[0] === 'villains') {
    renderVillains();
} else if (pathComponents.length === 2 && pathComponents[0] === 'villains') {
    const requestedID = parseInt(pathComponents[1]);
    renderVillain(requestedID);
} else if (pathComponents.length === 3 && pathComponents[0] === 'villains' && pathComponents[1] === 'search') {
    const searchName = decodeURIComponent(pathComponents[2]);
    renderVillainsByName(searchName);
} else {
    window.location.href = '../404.html';
}
