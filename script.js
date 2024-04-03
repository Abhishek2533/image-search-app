const accessKey = "1dgeFcEa0eOY6eYqNyDoPsdbeq9cUC_Hz6sYkpp-2aA";


const formElement = document.querySelector("form");
const search = document.getElementById("search-input");
const gallery = document.querySelector(".gallery");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;

    if (page === 1) {
        gallery.innerHTML = "";
    }
    result.map((elem) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const image = document.createElement('img');
        image.src = elem.urls.small;
        image.alt = elem.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = elem.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = elem.alt_description;

        imageContainer.appendChild(image);
        imageContainer.appendChild(imageLink);
        imageContainer.appendChild(imageLink);
        gallery.appendChild(imageContainer);
    });

    page++;
    if (page > 1) {
        showMore.style.display = 'block';
    }
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});