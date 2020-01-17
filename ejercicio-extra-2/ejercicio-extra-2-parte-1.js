const imagesAsStrings = [
    "https://www.w3schools.com/css/img_forest.jpg",
    "https://www.w3schools.com/css/img_5terre.jpg",
    "https://www.w3schools.com/css/img_forest.jpg",
    "https://www.w3schools.com/css/img_lights.jpg",
    "https://www.w3schools.com/css/img_mountains.jpg"
]

const galeria = document.querySelector("#container")

for (let i = 0; i < imagesAsStrings.length; i++) {
    galeria.innerHTML += `<div class="card">
            <img src="${imagesAsStrings[i]}" alt="Mountains">
        <div class="desc">Description of the image here</div>
    </div>`
}

