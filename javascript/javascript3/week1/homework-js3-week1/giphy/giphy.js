const inputSearch = document.getElementsByClassName('search')[0];
const numberOfGifsInput = document.getElementsByClassName('number-of-gifs')[0];
const button = document.getElementsByClassName('search-button')[0];
const resultGifs = document.getElementsByClassName('gifs')[0];


const getGifsUrl = () => {
  const gifQuery = inputSearch.value;
  let numberOfGifs = numberOfGifsInput.value;
    if (!gifQuery) {
        resultGifs.innerHTML = '';
        const errorText = document.createElement('h1')
        errorText.textContent = 'please enter search value'
        resultGifs.append(errorText)
        return
    } if (!numberOfGifs) {
        numberOfGifs = 100
    }
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=HGNr7Qx2kRcKKwRg4A1vxGtS7cUgzp9a&q=${gifQuery}&limit=${numberOfGifs}&offset=0&rating=pg-13&lang=en`
  )
    .then((response) => response.json())
    .then((result) => {
      showGifs(result.data);
    })
    .catch((error) => console.log(error));
};

const showGifs = (gifsData) => {
    resultGifs.innerHTML = '';
  gifsData.forEach((value) => {
    const gif = document.createElement('img');
    const gifList = document.createElement('li');
    gif.src = value.images.downsized.url;
    gifList.appendChild(gif);
    resultGifs.appendChild(gifList);
    
  });
};

button.onclick = getGifsUrl;