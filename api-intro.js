/** @format */

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function loadPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
// display users
function displayUsers(data) {
  const ul = document.getElementById("users");
  //   console.log(data);
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} Email: ${user.email}`;
    ul.appendChild(li);
  }
}
//display posts
function displayPosts(data) {
  const ul = document.getElementById("posts");
  //   console.log(data);
  for (const post of data) {
    const li = document.createElement("li");
    li.innerText = `Title: ${post.title} Body: ${post.body}`;
    ul.appendChild(li);
  }
}
//load data
function loadData() {
  loadUsers();
  loadPosts();
}

//album section

function loadAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => displayAlbums(data));
}
// loadAlbums();

function displayAlbums(albums) {
  const albumContainer = document.getElementById("albums");
  for (const album of albums) {
    const p = document.createElement("p");
    p.style.textAlign = "center";
    p.innerHTML = album.title;
    albumContainer.appendChild(p);
  }
}

//load photos
function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayPhotos(data));
}
loadPhotos();
function displayPhotos(photos) {
  const photoContainer = document.getElementById("photos");
  for (const photo of photos) {
    const img = document.createElement("img");
    img.src = photo.thumbnailUrl;
    photoContainer.appendChild(img);
  }
}
