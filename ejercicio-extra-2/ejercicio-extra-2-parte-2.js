const imagesAsObjects = [{
    title: "Forest",
    img: "https://www.w3schools.com/css/img_forest.jpg"
},
{
    title: "5 terre",
    img: "https://www.w3schools.com/css/img_5terre.jpg"
},
{
    title: "Northern lights",
    img: "https://www.w3schools.com/css/img_lights.jpg"
},
{
    title: "Montains",
    img: "https://www.w3schools.com/css/img_mountains.jpg"
}
]

const seccionGaleria = document.querySelector("#container")
 
for (let i = 0; i < imagesAsObjects.length; i++) {
    seccionGaleria.innerHTML += `<div class="card">
            <img src="${imagesAsObjects[i].img}" alt="${imagesAsObjects[i].title}">
        <div class="desc">${imagesAsObjects[i].title}</div>
    </div>`
}

