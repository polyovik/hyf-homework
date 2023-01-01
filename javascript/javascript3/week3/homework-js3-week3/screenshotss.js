const BASE_URL_SCREENSHOT_GENERATOR = 'https://website-screenshot6.p.rapidapi.com';
const API_HOST_SCREENSHOT_GENERATOR = 'website-screenshot6.p.rapidapi.com';

const BASE_URL_CRUD_API = `https://crudcrud.com/api/${API_KEY_CRUD_API}`;

const input = document.getElementsByClassName('url-input')[0];
const button = document.getElementsByClassName('get-screenshot-button')[0];
const image = document.getElementsByClassName('screenshot')[0];
const allScreenshotsContainer = document.getElementsByClassName('all-screenshots')[0];
const showAllScreenshotsButton = document.getElementsByClassName('get-list')[0];
const screenshotContainer = document.getElementsByClassName('screenshot-container')[0];
const mainContainer = document.getElementsByClassName('main-container')[0];
const preloader = document.getElementsByClassName('loading')[0];

let screenshotsList = [];

/**
 *
 * @param {string} url
 */
const generateScreenshot = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY_SCREENSHOT_GENERATOR,
      'X-RapidAPI-Host': API_HOST_SCREENSHOT_GENERATOR,
    },
  };

  const response = await fetch(`${BASE_URL_SCREENSHOT_GENERATOR}/screenshot?url=${url}&width=1920&height=1080&fullscreen=true`, options);
  const data = await response.json();

  return data;
  //console.log(data) {screenshotUrl: 'https://storage.linebot.site/screenshotq1vfkh1671793091866.png'}
};

const handleNewScreenshot = async () => {
  startLoad();
  const inputValue = input.value;
  const generatedScreenshot = await generateScreenshot(inputValue);
  console.log(generatedScreenshot);
  finishLoad();
  screenshotContainer.innerHTML = '';
  screenshotContainer.innerHTML += `
  <img class="screenshot" src="${generatedScreenshot.screenshotUrl}" alt="">
  <button class="save-button" onClick="saveScreenshot('${generatedScreenshot.screenshotUrl}')">Save screenshot</button>
`;
};


const saveScreenshot = async (screenshotUrl) => {
  const inputValue = input.value;
  const newScreenshot = {
    siteUrl: inputValue,
    screenshot: screenshotUrl,
    createdBy: user.email
  };
  await createOneScreenshot(newScreenshot);

  screenshotsList.push(newScreenshot);

  refreshScreenshotsList();
};

/**
 *
 * @param {object} newScreenshot
 */
const createOneScreenshot = async (newScreenshot) => {
  const response = await fetch(`${BASE_URL_CRUD_API}/screenshot`, {
    method: 'POST',
    body: JSON.stringify(newScreenshot),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

const deleteScreenshots = async (screenshotId) => {
  await fetch(`${BASE_URL_CRUD_API}/screenshot/${screenshotId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await refreshScreenshotsList();
};

const getAllScreenshots = async () => {
  const response = await fetch(`${BASE_URL_CRUD_API}/screenshot`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

const renderAllScreenshots = async () => {
  const screenshots = await getAllScreenshots();

  const filteredScreenshots = screenshots.filter((screenshot) => {
    return screenshot.createdBy === user.email
  })

  filteredScreenshots.forEach((screenshot) => {
    allScreenshotsContainer.innerHTML += `  
      <p class="">
      ${screenshot.siteUrl}
      </p>
      <img alt=""
      class="screenshot-list-img"
      src="${screenshot.screenshot}">
      <button class="button delete" onClick="deleteScreenshots('${screenshot._id}')">Delete</button>
      `;
  });
};

const refreshScreenshotsList = async () => {
  allScreenshotsContainer.innerHTML = '';
  await renderAllScreenshots();
};

const startLoad = () => {
  mainContainer.style.display = 'none';
  preloader.style.display = 'flex';
};

const finishLoad = () => {
  preloader.style.display = 'none';
  mainContainer.style.display = 'block';
};

button.onclick = handleNewScreenshot;
showAllScreenshotsButton.onclick = renderAllScreenshots;

