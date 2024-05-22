// access keys for buttons and field

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit')



submitButton.addEventListener('click', function (event){
  event.preventDefault();

  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  const post = { 
    userName: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim()

  };

  posts.push(post);

  localStorage.setItem('posts', JSON.stringify(posts));


  window.location.href = 'blog.html';


});
