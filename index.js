const urlInput = document.querySelector('#url-input');
const addUrlButton = document.querySelector('#add-url-button');
const openAllButton = document.querySelector('#open-all-button');
const urlList = document.querySelector('#url-list');

let urls = [];

function addUrl() {
    const newUrl = urlInput.value.trim();
    if (newUrl) {
        urls.push(newUrl);
        urlInput.value = '';
        updateUrlList();
    }
}

function removeUrl(index) {
    urls.splice(index, 1);
    updateUrlList();
}

function updateUrlList() {
    urlList.innerHTML = '';
    urls.forEach((url, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.textContent = url;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeUrl(index));
        listItem.appendChild(link);
        listItem.appendChild(removeButton);
        urlList.appendChild(listItem);
    });
}

function openAllUrls() {
    urls.forEach(url => window.open(url));
}

addUrlButton.addEventListener('click', addUrl);
urlInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addUrl();
    }
});
openAllButton.addEventListener('click', openAllUrls);
