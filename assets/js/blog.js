const backButton = document.querySelector('#back-button');
const postsList = document.querySelector('#posts-list');
const createPost = document.createElement('div')
backButton.addEventListener('click', function () {
  window.location.href = 'index.html';
  
});

function getPosts () {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  createPost.innerHTML=`<h2>${posts.title}</h2><p>${posts.content}</p><p><em>by ${posts.username}</em></p>`
  postsList.appendChild(createPost)

};

getPosts();