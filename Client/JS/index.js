// Form Submit
let form = document.querySelector(".create-post");
form.addEventListener("submit", createPost);



async function createPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

async function getItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

function renderCard(data){
    let link = document.createElement('a');
    let card = document.createElement('div');
    card.className = 'card';
    link.href = `#${data.id}` 
    card.textContent = data.name || data.title || data.description;
    link.appendChild(card);
    main.appendChild(link);
}


