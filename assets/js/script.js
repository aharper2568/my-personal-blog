// access keys for buttons and field

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit')



submitButton.addEventListener('click', function (event){
  event.preventDefault();

  const username = usernameInput.value.trim();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (username === '' || title === '' || content === '') {
    alert('Please complete all fields before submitting.');
    return; // Exit the function if validation fails
  }
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  const post = { 
    userName: username,
    title: title,
    content: content

  };


  posts.push(post);

  localStorage.setItem('posts', JSON.stringify(posts));

  window.location.href = 'blog.html';
 

});
