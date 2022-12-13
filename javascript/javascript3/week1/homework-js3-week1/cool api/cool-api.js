const button = document.getElementsByClassName('btn')[0];
const show = document.getElementsByClassName('explanation')[0];
const photo = document.getElementsByClassName('space-photo')[0];
const title = document.getElementsByClassName('title')[0];
const date = document.getElementsByClassName('date')[0];

function showAstronomyPicture() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      title.innerHTML = result.title;
      show.innerHTML = result.explanation;
      date.innerHTML = result.date;
      photo.src = result.url;
    });
}

button.onclick = showAstronomyPicture;

/* 
the structure of json data:
{"copyright":"Blake EstesChristian Sasse","date":"2022-12-05",
"explanation":"Have you ever seen the Pleiades star cluster? Even if you have..."
"hdurl":"https://apod.nasa.gov/apod/image/2212/Pleiades_Estes_3000.jpg",
"media_type":"image",
"service_version":"v1",
"title":"Pleiades: The Seven Sisters Star Cluster",
"url":"https://apod.nasa.gov/apod/image/2212/Pleiades_Estes_1080.jpg"}
*/
