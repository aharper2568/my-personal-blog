
  const backButton = document.querySelector('#back-button');
  const postsList = document.querySelector('#posts-list');

  backButton.addEventListener('click', function () {
      window.location.href = 'index.html';
  });

  function getPosts() {
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      postsList.innerHTML = '';
      posts.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.classList.add('post');
          postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.userName}</em></p>`;
          postsList.appendChild(postDiv);
      });
  }

  getPosts();