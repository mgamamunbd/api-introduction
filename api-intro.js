/** @format */
//Load Data button
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => displayData(data));
}
//load data

function displayData() {
  console.log(data);
  const div = document.getElementById("data");
  const p = document.createElement("p");
  p.innerHTML = "Hello World";
  div.appendChild(p);
}
// Load Users button
function loadUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
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
// Load Posts button
function loadPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
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

//album section
// Load Albums button
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

//load photos button
function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayPhotos(data));
}
// loadPhotos();
function displayPhotos(photos) {
  const photoContainer = document.getElementById("photos");
  for (const photo of photos) {
    const img = document.createElement("img");
    img.src = photo.thumbnailUrl;
    photoContainer.appendChild(img);
  }
}

function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => displayComments(data));
}

function displayComments(comments) {
  const commentContainer = document.getElementById("comments");
  for (const comment of comments) {
    const p = document.createElement("p");
    // p.innerHTML = comment.name;
    p.innerHTML = comment.body;
    commentContainer.appendChild(p);
  }
}

function toDos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => displayToDos(data));
}

function displayToDos(toDos) {
  const toDoContainer = document.getElementById("toDos");
  for (const toDo of toDos) {
    const p = document.createElement("p");
    p.innerHTML = toDo.title;
    toDoContainer.appendChild(p);
  }
}
